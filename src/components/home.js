import React from 'react'
import styled from 'styled-components'
import { devices } from './devices'
import logo from '../images/logotipo.png'

const Logo = styled.div`
  position: relative;
  top: 40%;
  margin: 0 auto;
  width: 672px;
  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: auto;
  }
`

const ResponsiveImg = styled.img`
  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`

const Description = styled.h3`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 400;
  position: relative;
  top: 41%;
  font-size: 20px;
  text-align: center;
  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    font-size: 18px;
  }
`

export default () => {
  return (
    <>
      <Logo>
        <ResponsiveImg src={logo} alt="Logotipo Angie Digital"></ResponsiveImg>
      </Logo>
      <Description>Graphic Designer & Jr Front End Developer</Description>
    </>
  )
}
