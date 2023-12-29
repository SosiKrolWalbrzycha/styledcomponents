import React, {useState} from 'react'

import { Link } from 'react-router-dom'
import ButtonIcon from '../atoms/Buttonicon.js'
import olowek from '../../assets/icons/olowek.svg'
import exit from '../../assets/icons/exit.svg'
import plus from '../../assets/icons/plus.svg'
import twitter from '../../assets/icons/twitter.svg'
import zarowa from '../../assets/icons/zarowa.svg'
import SidebarContainer from './SidebarContainer.js'
import { LogoH1, LogoH2, Logo, SiedbarLinks, SiedbarLogout } from './SidebarContainer.js'



const Sidebar = ({note, article}) => {


	const [activeButton, setActiveButton] = useState('/');

	const handleButtonClick = (path) => {
	  // Akcja dla Storybook
	  action('Button clicked')(path);
  
	  // Zmiana stanu aktywnego przycisku
	  setActiveButton(path);
	};



	return (<SidebarContainer note={note} article={article}>
		<Logo>
			<LogoH1>FAV</LogoH1>
			<LogoH2>NOTE.</LogoH2>
		</Logo>

		<SiedbarLinks>
			<ButtonIcon as={Link} to='/' icon={olowek} active={'true'} />
			<ButtonIcon as={Link} to='/twitters' icon={twitter} />
			<ButtonIcon as={Link} to='/articles' icon={zarowa} />
		</SiedbarLinks>

		<SiedbarLogout>
			<ButtonIcon as={Link} to='/' icon={exit} />
		</SiedbarLogout>
	</SidebarContainer>)
}

export default Sidebar
