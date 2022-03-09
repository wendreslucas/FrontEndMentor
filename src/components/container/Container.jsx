import React from 'react'
import styled from 'styled-components'
import Card from '../card/Card'

const Contain = styled.main`
  align-items: center;
  background: var(--light_gray);
  display: flex;
  height: 96vh;
  justify-content: center;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    <Contain>
      <Card />
    </Contain>
  )
}

export default Container
