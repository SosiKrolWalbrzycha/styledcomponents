import React from 'react'
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

const UserTemplate = ({ children, pageType }) => {


	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Sidebar pageType={pageType}/>
				<SlyledPageHeader>
				<Input search={true} placeholder={'Search in noetes...'}/>
					<SmallHeader>Your {pageType}s:</SmallHeader>
					<br></br>
					<Paragraph>6 {pageType}s</Paragraph>
				</SlyledPageHeader>
				<MainContent>{children}</MainContent>
			</ThemeProvider>
		</div>
	)
}

UserTemplate.propTypes = {
	children: PropTypes.element.isRequired,
}

export default UserTemplate
