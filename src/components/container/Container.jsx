import React from 'react'
import styled from 'styled-components'
import Main from '../main/Main'

const Contain = styled.div`
  align-items: center;
  background: var(--light_gray);
  display: flex;
  height: 96vh;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`

const Container = () => {
  return (
    <Contain>
      <Main />
    </Contain>
  )
}

export default Container
