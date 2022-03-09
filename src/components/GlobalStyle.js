import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  ${'' /* --white: black; */}
  --white: hsl(0, 0%, 100%);
  --light_gray: hsl(212, 45%, 89%);
  --grayish_blue: hsl(220, 15%, 55%);
  --dark_blue: hsl(218, 44%, 22%);
  
 
}

* {

  font-family: 'Outfit', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;  

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
`
