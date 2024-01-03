import styled, { css } from 'styled-components'
import magnifierIcon from '../../assets/icons/magnifier.svg'

const Input = styled.input`
	padding: 15px 30px;
	margin-bottom: 20px;
	font-size: 16px;
	font-weight: ${theme => theme.regular};
	background-color: ${({ theme }) => theme.grey100};
	border: none;
	border-radius: 50px;

	::placeholder {
		text-transform: uppercase;
		letter-spacing: 1px;
		color: ${({ theme }) => theme.grey200};
	}

	${({ search }) =>
		search &&
		css`
			font-size: 14px;
			padding: 10px 20px 10px 40px;
			background-image: url(${magnifierIcon});
			background-size: 20px;
			background-position: 10px 50%;
			background-repeat: no-repeat;
           
		`}
`

export default Input;
