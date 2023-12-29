import React from 'react'
import { action } from '@storybook/addon-actions';

import Sidebar from './Sidebar.js'

export default {
	title: 'Sidebar',
	component: Sidebar,
}

export const Normal = () => <Sidebar/>
export const Note = () => <Sidebar note/>
export const Article= () => <Sidebar article/>
