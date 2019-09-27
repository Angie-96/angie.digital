import React, { useRef } from 'react'
import Particles from 'react-particles-js'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import Home from '../components/home'
import Description from '../components/description'
import Contact from '../components/contact'
import Slide, { BaseWrapper } from '../components/slide'

const ParticleOpt = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      onresize: {
        enable: true,
        density_auto: true,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}
const ParticlesWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`

const MainAnimation = keyframes`
  0%{background-position:50% 0%}
  50%{background-position:51% 100%}
  100%{background-position:50% 0%}
`

const MainSlideWrapper = styled(BaseWrapper)`
  animation: ${MainAnimation} 20s ease infinite;
  background: linear-gradient(#f98f95, #d9a4f3, #68d8f1);
  background-size: 300% 300%;
`

const DescriptionSlideWrapper = styled(BaseWrapper)`
  background: #eaebed;
`

const ContactSlideWrapper = styled(BaseWrapper)`
  background: lightcoral; /*#68d8f1;*/
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
        customWrapper={MainSlideWrapper}
      >
        <Home />
      </Slide>
      <Slide
        localRef={slide2Ref}
        linkedRef={slide3Ref}
        customWrapper={DescriptionSlideWrapper}
      >
        <Description />
      </Slide>
      <Slide
        localRef={slide3Ref}
        linkedRef={slide1Ref}
        last={true}
        customWrapper={ContactSlideWrapper}
      >
        <ParticlesWrapper>
          <Particles params={ParticleOpt} />
        </ParticlesWrapper>
        <Contact />
      </Slide>
    </Layout>
  )
}

export default IndexPage
