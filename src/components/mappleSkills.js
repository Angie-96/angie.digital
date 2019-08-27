import React from 'react'
import ReactTooltip from 'react-tooltip'
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

const SkillWrapper = styled.div`
  width: 80px;
`

const MappleSkills = () => {
  return (
    <div>
      <SkillsGrid>
        <SkillWrapper>
          <Skills data-tip="HTML5" src={htmlImg} alt="html5"></Skills>
          <ReactTooltip place="top" type="dark" effect="float" />
        </SkillWrapper>
        <SkillWrapper>
          <Skills data-tip="CSS3" src={cssImg} alt="css3"></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills data-tip="Javascript" src={jsImg} alt="javascript"></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills data-tip="React" src={reactImg} alt="react"></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills
            data-tip="Wordpress"
            src={wordpressImg}
            alt="wordpress"
          ></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills data-tip="GIT" src={gitImg} alt="git"></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills
            data-tip="Photoshop"
            src={photoshopImg}
            alt="photoshop"
          ></Skills>
        </SkillWrapper>
        <SkillWrapper>
          <Skills
            data-tip="Illustrator"
            src={illustratorImg}
            alt="illustrator"
          ></Skills>
        </SkillWrapper>
      </SkillsGrid>
    </div>
  )
}

export default MappleSkills
