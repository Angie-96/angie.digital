import React from 'react'
import styled from 'styled-components'

import arrowDown from '../images/arrow3.png'

const ArrowDown = styled.img``

const ArrowUp = styled.img`
  transform: rotate(180deg);
`

function Arrow({ isArrowUp }) {
  const ArrowComponent = isArrowUp ? ArrowUp : ArrowDown

  return <ArrowComponent src={arrowDown} alt="arrow" />
}

export default Arrow
