import React, { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
	const [ , setAppState] = useState('notes')
	const setCurrentPage = locationFrom => {
		if (locationFrom.includes('notes')) {
			setAppState('notes')
		} else if (locationFrom.includes('twitters')) {
			setAppState('twitters')
		} else {
			setAppState('articles')
		}
	}

	return <AppContext.Provider value={{ appState, setAppState, setCurrentPage }}>{children}</AppContext.Provider>
}
