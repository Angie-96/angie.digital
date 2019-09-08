import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const MainWrapper = styled.div`
  margin: 0 auto;
  width: auto;
  position: relative;
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    color: rgb(255, 255, 255);
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    color: #000;
    background-image: none;
    font-family: 'Roboto Slab', serif;
    text-shadow: none;
    margin: 0;
  }
`

export default ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      {children}
    </MainWrapper>
  )
}
