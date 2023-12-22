import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paragraph from '../atoms/paragraph.js'
import SmallHeader from '../atoms/SmallHeader.js'
import Button from '../atoms/Button.js'
import AddInfoSmall from '../atoms/AddInfoSmall.js'
import LinkIcon from '../../assets/icons/link.svg'

const StyledWrapper = styled.div`
	box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.1);
	border-radius: 10px;
	overflow: hidden;
	min-height: 300px;
	display: grid;
	grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
	padding: 17px 30px 17px;
`

const StyledLink = styled.a`
	display: block;
	width: 47px;
	height: 47px;
	border-radius: 50px;
	background: white url(${LinkIcon});
	background-size: contain;
	position: absolute;
	right: 25px;
	top: 25px;

`

const StyledAvatar = styled.img`
	width: 86px;
	height: 86px;
	border-radius: 50px;
	border: 5px solid ${({ theme }) => theme.twitter};
	position: absolute;
	right: 25px;
	top: 25px;
	z-index: 10;
`

const Card = ({ cardType }) => {
	return (
		<StyledWrapper>
			<InnerWrapper activeColor={cardType}>
				<SmallHeader>Lorem ipsum dolor sit amet.</SmallHeader>
				<AddInfoSmall>3 days</AddInfoSmall>
				{cardType === 'twitter' && (
					<StyledAvatar src='https://i.wpimg.pl/450x0/i.wp.pl/a/f/film/033/00/38/0413800.jpg' />
				)}
				{cardType === 'article' && <StyledLink />}
			</InnerWrapper>
			<InnerWrapper>
				<Paragraph>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio, delectus officia quasi sequi quaerat
					libero tempore temporibus. Fuga, saepe.
				</Paragraph>
				<Button third>remove</Button>
			</InnerWrapper>
		</StyledWrapper>
	)
}

Card.propTypes = {
	cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
}

Card.defaultProps = {
	cardType: 'note',
}

export default Card
