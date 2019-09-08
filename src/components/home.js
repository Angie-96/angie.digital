import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { devices } from './devices'

const Logo = styled.div`
  position: relative;
  top: 40%;
  margin: 0 auto;
  width: 672px;
  @media screen ${devices.mobileS}, ${devices.mobileM}, ${devices.mobileL} {
    width: 80%;
  }
`

const Description = styled.h3`
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
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logotipo.png" }) {
        childImageSharp {
          fluid(maxWidth: 672) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Logo>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Logo>
      <Description>Web Developer/ Designer</Description>
    </>
  )
}
