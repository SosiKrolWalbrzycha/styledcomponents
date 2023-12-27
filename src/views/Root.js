import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainTemplate from '../components/templates/MainTemplate.js'
import Notes from './Notes.js'
import Articles from './Articles.js'
import Twitters from './Twitters.js'


const Root = () => (

	
	<MainTemplate>
		<BrowserRouter>
		<Routes>

			<Route exact path="/" Component={Notes}/>
			<Route exact path="/articles" Component={Articles}/>
			<Route exact path="/twitters" Component={Twitters}/>
	
		
		
		</Routes>
	
		
		</BrowserRouter>

	</MainTemplate>
)

export default Root
