import React from 'react'
import { action } from '@storybook/addon-actions';

import Sidebar from './Sidebar.js'

export default {
	title: 'Sidebar',
	component: Sidebar,
}

export const Normal = () => <Sidebar pageType='twitter'/>
export const Note = () => <Sidebar pageType='note'/>
export const Article= () => <Sidebar pageType='article'/>
