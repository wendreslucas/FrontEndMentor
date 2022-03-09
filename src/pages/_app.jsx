import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/GlobalStyle'
import SwitcherTema from '../components/switcherTema/SwitcherTema'
import { temaClaro, temaEscuro } from '../components/ui/Temas'
import { BtnTema } from '../components/ui/Ui'
import Home from './index'

function MyApp() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema(tema => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <Home />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema />
      </BtnTema>
    </ThemeProvider>
  )
}

export default MyApp
