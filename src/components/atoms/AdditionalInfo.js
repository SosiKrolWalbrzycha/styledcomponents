import styled from "styled-components";

const AdditionalInfo = styled.header`

font-family: "Montserrat", sans-serif;
font-weight: ${({theme}) => theme.bold};
font-size: 2.1rem;
line-height: 2.6rem;
color: ${({theme}) => theme.black};

`;

export default AdditionalInfo;