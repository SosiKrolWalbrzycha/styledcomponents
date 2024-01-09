import React, { useContext } from 'react'
import DetailsTemplate from '../components/templates/DetailsTemplate'
import { AppContext } from '../contexts/AppContext.js'

const DetailsPage = ({ pageType }) => {
	const { appState, setAppState } = useContext(AppContext)
	console.log(`to by sie zgadzało ${appState}`);
	return (
		<>
			
			<DetailsTemplate pageType={pageType} />
		</>
	)
}

export default DetailsPage
