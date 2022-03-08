import React from 'react'
import styled from 'styled-components'
import ImagemQr from '../image/Image'
import Texts from '../texts/Texts'

const Principal = styled.div`
  align-items: center;
  background: var(--white);
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-between;
  padding: 1rem;
  width: 24rem;
`

const Main = () => {
  return (
    <>
      <Principal>
        <ImagemQr />
        <Texts />
      </Principal>
    </>
  )
}

export default Main
