import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const TextoRodape = styled.a`
  font-weight: 700;
  text-decoration: none;
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
