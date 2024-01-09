import React from 'react'
import { useContext } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../theme/GlobalStyle.js'
import { theme } from '../../theme/mainTheme.js'
import Sidebar from '../organisms/Sidebar.js'
import BigHeader from '../atoms/BigHeader.js'
import Button from '../atoms/Button.js'
import Paragraph from '../atoms/paragraph.js'
import AddInfoSmall from '../atoms/AddInfoSmall.js'
import { routes } from '../../routes/index.js'
import { AppContext } from '../../contexts/AppContext.js';


const ContentWrapper = styled.div`
	margin-left: 280px;
	padding-left: 20px;
	padding-top: 120px;
`
const RemoveNote = styled.div`
	text-decoration: underline;
`

const Content = styled.div`
	margin: 40px 100px 40px 10px;
	width: 560px;
`
const ContentOpen = styled.div`
	margin: 40px 100px 40px 10px;
	width: 560px;
`

const ContentHeader = styled.div`
	position: relative;
	display: flex;
	width: 560px;
`

const TitleHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 410px;
`
const PhotoHeader = styled.div`
	position: absolute;
	top: -45px;
	left: 410px;
	display: flex;
	flex-direction: column;
`

const StyledAvatar = styled.img`
	width: 140px;
	height: 140px;
	border-radius: 75px;
	right: 25px;
	border: none;
	background-color: transparent;
`

const DetailsTemplate = ({ pageType }) => {

	const location = useLocation()
	const {appState, setCurrentPage} = useContext(AppContext)
	setCurrentPage(location.pathname)


	const buttonProps = {
		twitters: appState === 'twitters',
		articles: appState === 'articles',
		notes: appState === 'notes',
	}


	return (
		<div>
			
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Sidebar pageType={appState} />

				<ContentWrapper isTwitter={appState}>
		

					<ContentHeader>
						<TitleHeader>
							<BigHeader>Tytuł artykułi</BigHeader>
							<AddInfoSmall>CREATED - 25/03/2024</AddInfoSmall>
						</TitleHeader>
						<PhotoHeader>
							{appState && <StyledAvatar src={'https://i.wpimg.pl/450x0/i.wp.pl/a/f/film/033/00/38/0413800.jpg'} />}
						</PhotoHeader>
					</ContentHeader>

					<Content>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ex magni hic. Cum suscipit tempora
							aspernatur, error at iusto ratione iure omnis nulla excepturi eum maiores cupiditate quo est fuga.
							Voluptate, quo sint, debitis odit voluptas quas officiis unde numquam veritatis dolor quam? Labore cumque
							amet odio natus quis, nostrum quos voluptatum veniam! Ullam ipsa provident nostrum beatae, eligendi rem?
							Impedit possimus doloribus quod, repudiandae adipisci fugiat. Nostrum minus sit architecto porro, soluta,
							ipsa harum exercitationem accusamus eligendi corporis rem. Repellendus molestiae aperiam laudantium
							debitis itaque dignissimos autem omnis reiciendis. Repudiandae mollitia laudantium, distinctio voluptate,
							omnis sapiente cupiditate dolore qui ipsa ad voluptatibus sint impedit accusamus consectetur incidunt
							suscipit labore voluptatum at, unde rem minima. Inventore, sequi nihil! Mollitia, sed! Tempore eum et
							cupiditate odio. Asperiores maiores ad nobis fugiat aliquid aut consequuntur minima harum perferendis
							repellendus facilis quos, aperiam rem laborum illum doloribus, eligendi amet totam, at numquam
							perspiciatis?
						</Paragraph>
					</Content>

					<ContentOpen>
						<AddInfoSmall>
							{appState === 'twitters' && 'OPEN THIS TWITT'}
							{appState === 'notes' && 'This is only note'}
							{appState === 'articles' && 'OPEN THIS ARTICLE'}
						</AddInfoSmall>
					</ContentOpen>

					<Link to='/'>
						<Button {...buttonProps}>Go Back</Button>
					</Link>
					<RemoveNote>
						<AddInfoSmall>
							{appState === 'twitters' && 'remove this twitt'}
							{appState === 'notes' && 'remove this note'}
							{appState === 'articles' && 'remove this article'}
						</AddInfoSmall>
					</RemoveNote>
				</ContentWrapper>
			</ThemeProvider>
		</div>
	)
}

export default DetailsTemplate
