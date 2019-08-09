import React from 'react'
import styled from 'styled-components'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import { devices } from './devices'

const BackgroundSlide = styled.div`
  height: 100vh;
  background-color: #ace9f7;
`
const Contact = styled.h1`
  display: block;
  text-align: center;
  padding-top: 20%;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    font-size: 25px;
    font-weight: 400;
    margin: 0 auto;
    padding-top: 40%;
  }
`
const EmailWrapper = styled.div`
  text-align: center;
  margin-top: 2%;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 70%;
    margin: 30px auto;
  }
`
const Email = styled.a`
  color: #f98f95;
  font-size: 60px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    font-size: 30px;
    margin: 0 auto;
  }
`
const Redes = styled.div`
  width: 100px;
  margin: 10% auto;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    margin-top: 40%;
  }
  @media ${devices.s9Mobile} {
    margin-top: 50%;
  }
`
const Links = styled.img`
  width: 30px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 100%;
  }
`
const ALinks = styled.a`
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }
`
function ThirdSlide() {
  return (
    <BackgroundSlide>
      <Contact>Contact:</Contact>
      <EmailWrapper>
        <Email href="mailto:hi@angie.digital">hi@angie.digital</Email>
      </EmailWrapper>
      <Redes>
        <ALinks
          href="https://www.linkedin.com/in/angela-arias96/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Links src={linkedin} alt="linkedin"></Links>
        </ALinks>
        <ALinks
          href="https://www.instagram.com/angiedesign_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Links src={instagram} alt="instagram"></Links>
        </ALinks>
      </Redes>
    </BackgroundSlide>
  )
}

export default ThirdSlide
