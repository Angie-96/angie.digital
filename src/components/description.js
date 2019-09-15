import React from 'react'
import styled, { keyframes } from 'styled-components'
import { devices } from './devices'
import MappleSkills from './mappleSkills'

const TextDiv = styled.div`
  padding-top: 8%;
`

const UnderlinedGradient = keyframes`
  0%{
    transform: translate3d(0%, 0%, 0);
  }
  50%{
    transform: translate3d(-75%, 0%, 0);
  }
  100%{
    transform: translate3d(0%, 0%, 0);
  }
`

const DescriptionText = styled.p`
  color: #000;
  font-family: 'Roboto Slab';
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.15;
  width: 880px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 70%;
    font-size: 25px;
    font-weight: 400;
    padding-top: 10px;
  }
`

const colors = {
  pink: '#f98f95',
  purple: '#d9a4f3',
  blue: '#68d8f1',
  black: '#141414',
}

const Underline = styled.em`
  padding-right: 5px;
  padding-bottom: 2px;
  color: transparent;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  text-shadow: 0 0 ${colors.black}, 0.08em 0 0 #eaebed, 0 0, -0.08em 0 0 #eaebed;
  vertical-align: bottom;
  z-index: 5;
  &:after {
    animation: ${UnderlinedGradient} 6s linear infinite;
    background: linear-gradient(
        90deg,
        ${colors.pink} 7%,
        ${colors.purple} 60%,
        ${colors.blue} 65%
      )
      center 1.08em / 100% 5px no-repeat;

    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 400%;
    will-change: transform;
    z-index: -5;
  }

  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    &:after {
      background: none;
    }
  }
`
const SkillsText = styled.h2`
  width: 670px;
  margin: 0 auto;
  text-align: center;
  padding-top: 90px;
  font-size: 20px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 50%;
    font-size: 18px;
    font-weight: 400;
    padding-top: 10%;
  }
  @media ${devices.s9Mobile} {
    padding-top: 25%;
  }
`

function SecondSlide() {
  return (
    <>
      <TextDiv>
        <DescriptionText>
          Hello, my name is <Underline>Angie.</Underline>
        </DescriptionText>
        <DescriptionText>
          I am a <Underline>Jr. Front End Developer / Designer</Underline>
        </DescriptionText>
        <DescriptionText>
          living in <Underline>Córdoba, AR.</Underline>
        </DescriptionText>
      </TextDiv>

      <SkillsText>My Skills:</SkillsText>
      <MappleSkills />
    </>
  )
}

export default SecondSlide
