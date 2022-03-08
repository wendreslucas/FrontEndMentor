import React from 'react'
import Home from './index'
import Styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --white: hsl(0, 0%, 100%);
  --light_gray: hsl(212, 45%, 89%);
  --grayish_blue: hsl(220, 15%, 55%);
  --dark_blue: hsl(218, 44%, 22%);
}

* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;  
}
`

export default function MyApp() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}
