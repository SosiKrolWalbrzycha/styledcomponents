import styled, { css } from 'styled-components'
import { theme } from '../../theme/mainTheme'
const Button = styled.button`
    padding: 0;
	background-color: ${({theme}) => theme.primary}; 
    width: 220px;
	border: none;
    border-radius: 50px;
    font-weight: ${(theme) => theme.bold};;
    font-size: 16px;
    height: 47px;
    text-transform: uppercase;

	${({ secondary }) =>
		secondary &&
		css`
        background-color: ${theme.secondary};
        /* Ten sposob odwołania zadziała tylko gry ThemeProvider jest zastpiony eksportem, wyżej jest przez strzałkową */
        width: 105px;
		font-size: 10px;
		height: 30px;
		`};

`

export default Button