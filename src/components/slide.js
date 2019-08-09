import React from 'react'
import styled, { keyframes } from 'styled-components'
import ArrowDown from './arrow'
import { devices } from './devices'

const scrollToRef = ref => {
  window.scrollTo(0, ref.current.offsetTop)
}
const move = keyframes`
    0%  {transform: translateY(0);}
    30% {transform: translateY(-10px);}
    100% {transform: translateY(-10px);}
`
const ButtonDown = styled.div`
  cursor: pointer;
  display: block;
  position: relative;
  bottom: 70px;
  left: 48.2%;
  width: 64px;
  height: 64px;
  animation: ${move} 2s infinite alternate;

  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    transform: scale(0.7);
    left: 41%;
  }
`

const StyledDiv = styled.div`
  height: 100vh;
  width: auto;
`

const ContentWrapper = styled.div`
  height: 100%;
`

const Slide = ({ localRef, linkedRef, children }) => {
  return (
    <StyledDiv ref={localRef}>
      <ContentWrapper>{children}</ContentWrapper>
      <ButtonDown onClick={() => scrollToRef(linkedRef)}>
        <ArrowDown />
      </ButtonDown>
    </StyledDiv>
  )
}

export default Slide
