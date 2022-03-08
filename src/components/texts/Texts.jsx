import React from 'react'
import styled from 'styled-components'

const Texto = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  line-height: 2rem;
`

const Paragrafo = styled.p`
  margin: 1rem 0 2rem 0;
  color: var(--grayish_blue);
  text-align: center;
  font-size: 1.1rem;
`

const Texts = () => {
  return (
    <Texto>
      <Titulo>
        Improve your front-end <br /> skills by building projects
      </Titulo>

      <Paragrafo>
        Scan the QR code to visit Frontend <br />
        Mentor and take your coding skills to <br />
        the next level
      </Paragrafo>
    </Texto>
  )
}

export default Texts
