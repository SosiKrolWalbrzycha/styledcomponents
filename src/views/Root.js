import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button from '../components/atoms/Button.js'
import Input from '../components/atoms/input.js'
import BigHeader from '../components/atoms/BigHeader.js'
import AdditionalInfo from '../components/atoms/AdditionalInfo.js'
import AddInfoSmall from '../components/atoms/AddInfoSmall.js'
import olowek from '../assets/icons/olowek.svg'
import Buttonicon from '../components/atoms/Buttonicon.js'
import Paragraph from '../components/atoms/paragraph.js'
import SmallHeader from '../components/atoms/SmallHeader.js'
import Card from '../components/molecules/Card.js'
import GlobalStyle from '../theme/GlobalStyle.js'
import { theme } from '../theme/mainTheme.js'

function Root() {
	return (
		<div className='App'>	
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{/* Themeprvider Oplata tylko jeden elenent */}
				<>
					<h1>hello</h1>
					<Button>Close / Save</Button>
					<Button secondary='third'>Close / Sawve rwxemove</Button>
					<Input type='text' placeholder='wpisz tekst'/>
					<Input type='text' placeholder='szukaj'/>
					<Buttonicon icon={olowek}/>
					<BigHeader>CLOSE / SAVE --- To jest BigHeader</BigHeader>
					<SmallHeader>A to jest Smaall header SAVE</SmallHeader>
					<AdditionalInfo> CLOSE / SAVE To jest additional info</AdditionalInfo>
					<AddInfoSmall> CLOSE / SAVE To jest małe info</AddInfoSmall>
					<Paragraph>A to jest paragraf CLOSE / SAVE</Paragraph>
					<Card/>
				
				</>
			</ThemeProvider>
		</div>
	)
}

export default Root
