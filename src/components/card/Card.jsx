import React from 'react'
import styled from 'styled-components'
import ImagemQr from '../image/Image'
import Texts from '../texts/Texts'
import { conteudoClaro } from '../ui/Variaveis'

const Principal = styled.div`
  align-items: center;
  background-color: ${conteudoClaro};
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  padding: 1rem;
  width: 24rem;
`

const Card = () => {
  return (
    <>
      <Principal>
        <ImagemQr />
        <Texts />
      </Principal>
    </>
  )
}

export default Card
