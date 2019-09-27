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
  left: 48.2%;
  width: 64px;
  height: 64px;
  animation: ${move} 2s infinite alternate;

  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 30px;
    left: 41%;
  }
`

export const BaseWrapper = styled.div`
  height: 100vh;
  width: auto;
  scroll-snap-align: start;
`

const ContentWrapper = styled.div`
  height: 90%;
`

const Slide = ({
  localRef,
  linkedRef,
  children,
  customWrapper,
  last = false,
}) => {
  const Wrapper = customWrapper || BaseWrapper

  return (
    <Wrapper ref={localRef}>
      <ContentWrapper>{children}</ContentWrapper>
      <ButtonArrow onClick={() => scrollToRef(linkedRef)}>
        <Arrow isArrowUp={last} />
      </ButtonArrow>
    </Wrapper>
  )
}

export default Slide
