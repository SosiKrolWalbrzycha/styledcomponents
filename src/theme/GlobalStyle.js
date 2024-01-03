import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  padding: 0;
}

html {
    font-size: 62.5%; // 1 rem = 10 px

}

body {
display: flex;
flex-direction: row;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;

    
}

`
export default GlobalStyle
