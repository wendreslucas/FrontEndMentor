import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const CardImagem = styled.div`
  position: relative;
  height: 22rem;
  width: 22rem;

  .Imagem {
    border-radius: 1rem;
  }
`

const ImagemQr = () => {
  return (
    <CardImagem>
      <Image
        className="Imagem"
        alt="Imagem Qr Code"
        layout="fill"
        objectFit="cover"
        src="/image-qr-code.png"
      />
    </CardImagem>
  )
}

export default ImagemQr
