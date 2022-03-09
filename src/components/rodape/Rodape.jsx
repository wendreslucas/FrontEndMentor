import React from 'react'
import styled from 'styled-components'
import { textoRodape, conteudoEscuro } from '../ui/Variaveis'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.body};
  justify-content: center;

  text-decoration: none;
  /* margin-top: 10px; */
`

const TextoRodape = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${textoRodape};

  &:hover {
    color: ${conteudoEscuro};
  }
`

const Rodape = () => {
  return (
    <Footer>
      <TextoRodape
        target="_blank"
        href="https://www.linkedin.com/in/wendres-lucas/"
        rel="linkedin"
      >
        Coded By Wendres Lucas
      </TextoRodape>
    </Footer>
  )
}

export default Rodape
