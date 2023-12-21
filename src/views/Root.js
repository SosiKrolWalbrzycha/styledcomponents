import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button from '../components/atoms/Button.js'
import Input from '../components/atoms/input.js'
import BigHeader from '../components/atoms/BigHeader.js'
import AdditionalInfo from '../components/atoms/AdditionalInfo.js'
import olowek from '../assets/icons/olowek.svg'
import Buttonicon from '../components/atoms/Buttonicon.js'



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
					<Button secondary>rwxemove</Button>
					<Input type='text' placeholder='wpisz tekst'/>
					<Input search type='text' placeholder='szukaj'/>
					<Buttonicon icon={olowek}/>
					<BigHeader>To jest BigHeader</BigHeader>
					<AdditionalInfo>To jest additional info</AdditionalInfo>
				</>
			</ThemeProvider>
		</div>
	)
}

export default Root
