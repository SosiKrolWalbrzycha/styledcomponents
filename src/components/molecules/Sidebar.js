import React from 'react'

import { Link } from 'react-router-dom'
import ButtonIcon from '../atoms/Buttonicon.js'
import olowek from '../../assets/icons/olowek.svg'
import exit from '../../assets/icons/exit.svg'
import plus from '../../assets/icons/plus.svg'
import twitter from '../../assets/icons/twitter.svg'
import zarowa from '../../assets/icons/zarowa.svg'
import SidebarContainer from '../organisms/SidebarContainer.js'

const Sidebar = () => (
	<SidebarContainer>
		<p>logo</p>
		<div>
			<ButtonIcon as={Link} to='/' icon={olowek} />
			<ButtonIcon as={Link} to='/twitters' icon={twitter} />
			<ButtonIcon as={Link} to='/articles' icon={zarowa} />
		</div>
		<ButtonIcon as={Link} to='/' icon={exit} />
	</SidebarContainer>
)

export default Sidebar
