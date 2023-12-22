import ButtonIcon from './Buttonicon.js';
import styled from 'styled-components';
import olowek from '../../assets/icons/olowek.svg'
import exit from '../../assets/icons/exit.svg'
import plus from '../../assets/icons/plus.svg'
import twitter from '../../assets/icons/twitter.svg'
import zarowa from '../../assets/icons/zarowa.svg'


const YellowBackground = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
height: 500px;
background: ${({theme}) => theme.note};
`

export default {
    title: 'ButtonIcon',
    component: ButtonIcon,
};

export const Normal = () => <YellowBackground><ButtonIcon/></YellowBackground>;
export const Olowek = () => <YellowBackground><ButtonIcon icon={olowek} active={true}/></YellowBackground>;
export const Exit = () => <YellowBackground><ButtonIcon icon={exit}/></YellowBackground>;
export const Plus = () => <YellowBackground><ButtonIcon icon={plus}/></YellowBackground>;
export const Twitter = () => <YellowBackground><ButtonIcon icon={twitter}/></YellowBackground>;
export const Zarowa = () => <YellowBackground><ButtonIcon icon={zarowa}/></YellowBackground>;
