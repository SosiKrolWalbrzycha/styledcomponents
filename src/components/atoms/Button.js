import styled, { css } from 'styled-components'

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
    cursor: pointer;
    transition: background-color .3s;

    &:hover {
        background-color: ${({ theme }) => theme.grey200}; 
    }


	${({ secondary }) =>
		secondary &&
		css`
        background-color: ${({theme}) => theme.secondary}; 
        width: 105px;
		font-size: 10px;
		height: 30px;
		`};

`

export default Button