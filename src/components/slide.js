import React from 'react'
import styled, { keyframes } from 'styled-components'
import Arrow from './arrow'
import { devices } from './devices'

const scrollToRef = ref => {
  window.scrollTo(0, ref.current.offsetTop)
}
const move = keyframes`
    0%  {transform: translateY(0);}
    30% {transform: translateY(-10px);}
    100% {transform: translateY(-10px);}
`
const ButtonArrow = styled.div`
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

const Slide = ({ localRef, linkedRef, children, last = false }) => {
  return (
    <StyledDiv ref={localRef}>
      <ContentWrapper>{children}</ContentWrapper>
      <ButtonArrow onClick={() => scrollToRef(linkedRef)}>
        <Arrow isArrowUp={last} />
      </ButtonArrow>
    </StyledDiv>
  )
}

export default Slide
