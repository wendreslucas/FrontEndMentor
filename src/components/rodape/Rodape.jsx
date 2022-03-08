import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

const TextoRodape = styled.a`
  &:hover {
    color: var(--dark_blue);
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
