import styled, { css } from 'styled-components'


const Button1 = styled.button`
	border: none;
	font-weight: 500;
	text-transform: uppercase;
	border-radius: 50px;
	width: ${({ width }) => width || '80%'};
	height: ${({ height }) => height || '47px'};
	font-size: ${({ fontsize }) => fontsize || '10px'};
	background-color: ${({ background }) => background || 'black'};
	color: ${({ color }) => color || 'white'};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.primary || 'blue'}; 
    };


	@media (min-width: 768px) {
		width: ${({ width }) => width || '80%'};
		font-size: ${({ fontsize }) => fontsize || '16px'};
	}
`

export default Button1
