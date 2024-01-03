import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paragraph from '../atoms/paragraph.js'
import SmallHeader from '../atoms/SmallHeader.js'
import Button from '../atoms/Button.js'
import AddInfoSmall from '../atoms/AddInfoSmall.js'
import LinkIcon from '../../assets/icons/link.svg'
import { useNavigate } from 'react-router-dom'

const StyledWrapper = styled.div`
	box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.1);
	border-radius: 10px;
	overflow: hidden;
	min-height: 300px;
	display: grid;
	grid-template-rows: 0.25fr 1fr;
	cursor:pointer;
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

const Card = ({ cardType, title, created, twitterName, articleUrl, content, key, id }) => {


const[handleClick, setHandleClick] = useState(false)

const handleCardClick = () => {
	setHandleClick(true)
}

const navigate = useNavigate();

if(handleClick && navigate(`/${cardType}/${id}`));

	return (
		<StyledWrapper onClick={handleCardClick}>
			<InnerWrapper activeColor={cardType}>
				<SmallHeader>{title}</SmallHeader>
				<AddInfoSmall>{created}</AddInfoSmall>
				{cardType === 'twitter' && (
					<StyledAvatar src={'https://i.wpimg.pl/450x0/i.wp.pl/a/f/film/033/00/38/0413800.jpg'} />
				)}
				{cardType === 'article' && (
					<StyledLink href={articleUrl} target='_blank' rel='noopener noreferrer'>
					
					</StyledLink>
				)}
			</InnerWrapper>
			<InnerWrapper>
			<Paragraph>{id}</Paragraph>
				<Paragraph>{content}</Paragraph>
				<Button third>remove</Button>
			</InnerWrapper>
		</StyledWrapper>
	)
}

Card.propTypes = {
	cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
	title: PropTypes.string.isRequired,
	created: PropTypes.string.isRequired,
	twitterName: PropTypes.string,
	articleUrl: PropTypes.string,
	content: PropTypes.string.isRequired,
}

Card.defaultProps = {
	cardType: 'note',
	twitterName: null,
	articleUrl: null,
}

export default Card
