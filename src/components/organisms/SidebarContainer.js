import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 157px;
  height: 100vh;
  background-color: ${({theme}) => theme.twitter}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default SidebarContainer;