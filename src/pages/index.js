import React, { useRef } from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import Layout from '../components/layout'
import Home from '../components/home'
import Description from '../components/description'
import Contact from '../components/contact'
import { devices } from '../components/devices'

import Slide from '../components/slide'

const ParticleOpt = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 700,
      },
    },
  },
}

const ParticlesWrapper = styled.div`
  height: 100vh;
  position: absolute;
  width: 100%;
  @media ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    display: none;
  }
`

const IndexPage = props => {
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide3Ref = useRef(null)

  return (
    <Layout>
      <Slide
        localRef={slide1Ref}
        linkedRef={slide2Ref}
        background="linear-gradient(#f98f95, #d9a4f3, #68d8f1)"
      >
        <ParticlesWrapper>
          <Particles params={ParticleOpt} />
        </ParticlesWrapper>
        <Home />
      </Slide>
      <Slide localRef={slide2Ref} linkedRef={slide3Ref} background="#eaebed">
        <Description />
      </Slide>
      <Slide
        localRef={slide3Ref}
        linkedRef={slide1Ref}
        last={true}
        background="#ace9f7"
      >
        <Contact />
      </Slide>
    </Layout>
  )
}

export default IndexPage
