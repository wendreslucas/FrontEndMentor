import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const CardImagem = styled.div`
  .conteudo {
    position: relative;
    height: 22rem;
    width: 22rem;
  }

  .img {
    border-radius: 1rem;
  }
`

const ImagemQr = () => {
  return (
    <CardImagem>
      <div className="conteudo">
        <Image
          className="img"
          src="/image-qr-code.png"
          alt="Imagem Qr Code"
          width={350}
          height={350}
        />
      </div>
    </CardImagem>
  )
}

export default ImagemQr
