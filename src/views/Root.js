import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button from '../components/atoms/Button.js'
import Button1 from '../components/atoms/Button1.js'
import Button2 from '../components/atoms/Button2.js'

import GlobalStyle from '../theme/GlobalStyle.js'
import {theme} from '../theme/mainTheme.js'

function Root() {
	return (
		<div className='App'>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
			{/* Themeprvider Oplata tylko jeden elenent */}
				<>
					<h1>hello</h1>
					<Button>Close / Save</Button>
					<Button secondary>remove</Button>
					<Button1>remove</Button1>
					<Button2>remove2</Button2>
				</>
			</ThemeProvider>
		</div>
	)
}

export default Root
