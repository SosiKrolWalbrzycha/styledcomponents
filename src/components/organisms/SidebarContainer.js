import styled, { css }  from 'styled-components';


export const Logo = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
padding: 0;
font-family: "Montserrat", sans-serif;
font-weight: bold;
`

export const LogoH1 = styled.p`

font-size: 2.4rem;
line-height: .9;
margin: 0;

`;
export const LogoH2 = styled.p`
font-size: 1.5rem;
line-height: .8;
margin: 0;
`;

export const SiedbarLinks = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 300px;

`;
export const SiedbarLogout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-bottom: 50px;

`;

const SidebarContainer = styled.div`
  width: 157px;
  height: 100vh;
  background-color: ${({theme}) => theme.twitter}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  ${({ note }) =>
		note &&
		css`
        background-color: ${({theme}) => theme.note}; 
  
		`};

    ${({ article }) =>
		article &&
		css`
        background-color: ${({theme}) => theme.article}; 
  
		`};

`;




export default SidebarContainer;
