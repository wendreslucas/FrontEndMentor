import React from 'react'
import Home from './index'
import Styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
