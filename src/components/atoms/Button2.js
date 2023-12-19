import styled, { css } from 'styled-components'
import { theme } from '../../theme/mainTheme'

const Button2 = styled.button`
padding: 0;
	background-color: ${theme.secondary};
	border: none;
	width: ${({ secondary }) => (secondary ? '150px' : '220px')}; // po podanym propsie z destrukturyzacją
	width: ${({ width }) => (width || '220px')}; // po podanym propsie z destrukturyzacją, po propsie
    font-size: 16px;
    height: 47px;

	${({ secondary }) =>
		secondary &&
		css`
			font-size: 10px;
			height: 30px;
		`}; // zebranie kilku parametrów w jedna funkcje strzalkową, props zdestrukturyzowany


	font-weight: 500;
	text-transform: uppercase;
	border-radius: 50px;
`

export default Button2
