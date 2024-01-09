import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/index.js'
import Notes from './Notes.js'
import Articles from './Articles.js'
import Twitters from './Twitters.js'
import DetailsPage from './DetailsPage.js'
import { routes } from '../routes'
import { AppProvider } from '../contexts/AppContext'

const Root = () => {
	return (
		<Provider store={store}>
			<AppProvider>
				<BrowserRouter>
					<Routes>
						<Route exact path={routes.home} element={<Navigate to='/notes' replace />} />
						<Route exact path={routes.notes} element={<Notes />} />
						<Route path={routes.note} element={<DetailsPage pageType='notes' />} />
						<Route exact path={routes.articles} element={<Articles />} />
						<Route path={routes.article} element={<DetailsPage pageType='articles' />} />
						<Route exact path={routes.twitters} element={<Twitters />} />
						<Route path={routes.twitter} element={<DetailsPage pageType='twitters' />} />
					</Routes>
				</BrowserRouter>
			</AppProvider>
		</Provider>
	)
}

export default Root
