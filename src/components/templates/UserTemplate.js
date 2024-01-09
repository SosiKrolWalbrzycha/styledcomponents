import React from 'react'
import { useLocation} from 'react-router-dom'
import { useContext } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../theme/GlobalStyle.js'
import { theme } from '../../theme/mainTheme.js'
import Sidebar from '../organisms/Sidebar.js'
import MainContent from './UserTemplateContainer.js'
import { SlyledPageHeader } from './UserTemplateContainer.js'
import SmallHeader from '../atoms/SmallHeader.js'
import Input from '../atoms/input.js'
import Paragraph from '../atoms/paragraph.js'
import { AppContext } from '../../contexts/AppContext.js';




const UserTemplate = ({ children, pageType }) => {
	const location = useLocation()
	const {appState, setCurrentPage} = useContext(AppContext)
	setCurrentPage(location.pathname)

	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Sidebar pageType={appState} />
				<SlyledPageHeader>
					<Input search={true} placeholder={'Search in noetes...'} />
					<SmallHeader>Your {appState}:</SmallHeader>
					<br></br>
					<Paragraph>6 {appState}</Paragraph>
				</SlyledPageHeader>
				<MainContent>{children}</MainContent>
			</ThemeProvider>
		</div>
	)
}

UserTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	pageType: PropTypes.string,
}

export default UserTemplate
