import styled, { css } from 'styled-components'

const BigHeader = styled.header`
font-family: "Montserrat", sans-serif;
font-style: normal;
font-weight: ${({theme}) => theme.bold};
font-size: 4rem;
line-height: 4,9rem;
color: ${({theme}) => theme.black};
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export default BigHeader;