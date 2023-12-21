import styled from 'styled-components'
import olowek from '../../assets/icons/olowek.svg'
import exit from '../../assets/icons/exit.svg'
import plus from '../../assets/icons/plus.svg'
import twitter from '../../assets/icons/twitter.svg'
import zarowa from '../../assets/icons/zarowa.svg'
const ButtonIcon = styled.button`

width: 67px;
height: 67px;
border-radius: 20px;
background-image: url(${({icon}) => icon});
background-repeat: no-repeat;
background-position: 50% 50%;
background-size: 40%;
border: none;
background-color: ${({active}) => active === true ? 'white' : 'transparent'};
`;

export default ButtonIcon;