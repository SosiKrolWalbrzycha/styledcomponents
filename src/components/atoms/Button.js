import styled, { css } from 'styled-components'

const Button = styled.button`
    padding: 0;
	background-color: ${({theme}) => theme.note}; 
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


	${({ twitter }) =>
		twitter &&
		css`
        background-color: ${({theme}) => theme.twitter}; 
        width: 105px;
		font-size: 10px;
		height: 30px;
		`};

	${({ article }) =>
		article &&
		css`
        background-color: ${({theme}) => theme.article}; 
        width: 105px;
		font-size: 10px;
		height: 30px;
		`};

	${({ third }) =>
		third &&
		css`
        background-color: ${({theme}) => theme.grey200}; 
        width: 105px;
		font-size: 10px;
		height: 30px;
		`};

`

export default Button