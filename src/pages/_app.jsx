import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../components/GlobalStyle'
import SwitcherTema from '../components/switcherTema/SwitcherTema'
import { temaClaro, temaEscuro } from '../components/ui/Temas'
import { BtnTema } from '../components/ui/ui'
import Home from './index'

function MyApp() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema(tema => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Home />
    </ThemeProvider>
  )
}

export default MyApp
