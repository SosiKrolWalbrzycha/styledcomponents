import styled from 'styled-components'

const BigHeader = styled.h1`
font-style: normal;
font-weight: ${({theme}) => theme.bold};
font-size: 40px;
line-height: 49px;
color: ${({theme}) => theme.black};
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export default BigHeader;