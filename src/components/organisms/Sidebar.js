import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import ButtonIcon from '../atoms/Buttonicon.js'
import olowek from '../../assets/icons/olowek.svg'
import exit from '../../assets/icons/exit.svg'
import plus from '../../assets/icons/plus.svg'
import { useLocation } from 'react-router-dom'
import twitter from '../../assets/icons/twitter.svg'
import zarowa from '../../assets/icons/zarowa.svg'
import SidebarContainer from './SidebarContainer.js'
import { LogoH1, LogoH2, Logo, SiedbarLinks, SiedbarLogout } from './SidebarContainer.js'

const Sidebar = ({pageType}) => {
	


	

	return (


		<SidebarContainer pageType={pageType}>
			<Logo>
				<LogoH1>FAV</LogoH1>
				<LogoH2>NOTE.</LogoH2>
			</Logo>

			<p>{pageType}</p>

			<SiedbarLinks>
				<ButtonIcon
					id='1'
					as={Link}
					to='/notes'
					icon={olowek}
					active={pageType === 'notes' ? 'true' : 'false'}
					
				/>
				<ButtonIcon
					id='2'
					as={Link}
					to='/twitters'
					icon={twitter}
					active={pageType === 'twitters' ? 'true' : 'false'}
					
				/>

				<ButtonIcon
					id='3'
					as={Link}
					to='/articles'
					icon={zarowa}
					active={pageType === 'articles' ? 'true' : 'false'}
				
				/>
			</SiedbarLinks>

			<SiedbarLogout>
				<ButtonIcon as={Link} to='/login' icon={exit} />
			</SiedbarLogout>
		</SidebarContainer>
	)
}

export default Sidebar;
