import styled from 'styled-components'

const Paragraph = styled.header`
	font-style: normal;
	font-weight: ${({ theme }) => theme.light};
	font-size: 16px;
	line-height: 49px;
	color: ${({ theme }) => theme.black};
`

export default Paragraph
