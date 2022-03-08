import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div``

const ImagemQr = () => {
  return (
    <Container>
      <Image
        src="/image-qr-code.png"
        alt="Imagem Qr Code"
        width={400}
        height={400}
      />
    </Container>
  )
}

export default ImagemQr
