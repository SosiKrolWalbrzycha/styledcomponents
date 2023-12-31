import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../theme/GlobalStyle.js'
import { theme } from '../../theme/mainTheme.js'
import Sidebar from '../organisms/Sidebar.js'

const MainTemplate = ({ children }) => (
	<div>
		<GlobalStyle />

		<ThemeProvider theme={theme}>
			<>
			<Sidebar/>
				{children}
			</>
		</ThemeProvider>
	</div>
)

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
}

export default MainTemplate
