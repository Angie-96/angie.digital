import React from 'react'
import styled from 'styled-components'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import { devices } from './devices'

const Contact = styled.h1`
  display: block;
  text-align: center;
  padding-top: 20%;
  font-size: 25px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
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
  text-decoration: none;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    font-size: 30px;
    margin: 0 auto;
  }
`
const Redes = styled.div`
  width: 150px;
  margin: 7% auto;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    margin-top: 30%;
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
    <>
      <Contact>Get in touch</Contact>
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
        <ALinks
          href="https://github.com/Angie-96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Links src={github} alt="github"></Links>
        </ALinks>
      </Redes>
    </>
  )
}

export default ThirdSlide
