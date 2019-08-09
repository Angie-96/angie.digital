import React from 'react'
import styled from 'styled-components'
import htmlImg from '../images/html5.png'
import cssImg from '../images/css3.png'
import jsImg from '../images/javascript.png'
import reactImg from '../images/react.png'
import wordpressImg from '../images/wordpress.png'
import gitImg from '../images/git.png'
import photoshopImg from '../images/photoshop.png'
import illustratorImg from '../images/illustrator.png'
import { devices } from './devices'

const BackgroundSlide = styled.div`
  height: 100vh;
  background-color: #eaebed;
`

const DescriptionText = styled.h1`
  width: 670px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10%;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 70%;
    font-size: 25px;
    font-weight: 400;
    padding-top: 20%;
  }
`
const SkillsText = styled.h1`
  width: 670px;
  margin: 0 auto;
  text-align: center;
  padding-top: 70px;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 50%;
    font-size: 18px;
    font-weight: 400;
    padding-top: 20%;
  }
  @media ${devices.s9Mobile} {
    padding-top: 40%;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-column-gap: 100px;
  grid-row-gap: 20px;
  width: 670px;
  margin: 70px auto;

  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    grid-template-columns: 60px 60px 60px 60px;
    grid-column-gap: 10px;
    grid-row-gap: 5px;
    width: 250px;
    margin: 60px auto;
  }

  @media ${devices.s9Mobile} {
    margin: 10% auto;
  }
`

const Skills = styled.img`
  width: 80px;
  &:hover {
    border:1px solid transparent;
    -webkit-box-shadow: 0px 0px 30px 0px rgb(18, 194, 233, 0.7));
    -moz-box-shadow: 0px 0px 30px 0px rgb(18, 194, 233, 0.7));
    box-shadow: 0px 0px 30px 0px rgb(18, 194, 233, 0.7));
  }

  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 70%;
  }
`

function SecondSlide() {
  return (
    <BackgroundSlide>
      <DescriptionText>
        Hello, my name is Angie. I am a Jr. Front End Developer / Designer
        living in Córdoba, AR.
      </DescriptionText>
      <SkillsText>My Skills:</SkillsText>
      <SkillsGrid>
        <Skills src={htmlImg} alt="html5"></Skills>
        <Skills src={cssImg} alt="css3"></Skills>
        <Skills src={jsImg} alt="javascript"></Skills>
        <Skills src={reactImg} alt="react"></Skills>
        <Skills src={wordpressImg} alt="wordpress"></Skills>
        <Skills src={gitImg} alt="git"></Skills>
        <Skills src={photoshopImg} alt="photoshop"></Skills>
        <Skills src={illustratorImg} alt="illustrator"></Skills>
      </SkillsGrid>
    </BackgroundSlide>
  )
}

export default SecondSlide
