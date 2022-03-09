import React from 'react'
import styled from 'styled-components'
import { MdDarkMode } from 'react-icons/md'

const BotaoTema = styled.a`
  cursor: pointer;
`

const TEMA = (
  <BotaoTema>
    <MdDarkMode size={32} />
  </BotaoTema>
)
const claro = TEMA
const escuro = TEMA

const Tema = () => {
  return Tema ? escuro : claro
}

export default Tema
