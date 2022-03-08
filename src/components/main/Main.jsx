import React from 'react'
import styled from 'styled-components'
import ImagemQr from '../image/Image'

const Principal = styled.div`
  align-items: center;
  background: var(--light_gray);
  display: flex;
  height: 92vh;
  justify-content: center;
  width: 100%;
`

const Main = () => {
  return (
    <Principal>
      <ImagemQr />
    </Principal>
  )
}

export default Main
