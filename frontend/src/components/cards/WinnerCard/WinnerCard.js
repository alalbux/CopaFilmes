import React, { Component } from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'
import {
  Card
} from '../../index'

import Flexbox from '../../layout/Flexbox/Flexbox'

const WinnerCardContainer = styled(Card)`
  width: 100%;
  margin: 0 auto;
  min-height: 100px;
  margin: 16px auto;
`

const Title = styled.strong`
  display: block;
  font-weight: bold;
  font-size: 14px;
`

const Label = styled.span`
  display: block;
  font-size: 14px;
`

class WinnerCard extends Component {
  render () {
    const {
      titulo,
      ano,
      nota,
    } = this.props

    return (
      <WinnerCardContainer>
        <Flexbox vertical middle justify="space-around">
            <Title>{titulo} - {ano}</Title>

            <Label>Nota: {nota}</Label>
        </Flexbox>
      </WinnerCardContainer>
    )
  }
}

WinnerCard.propTypes = {
  titulo: string,
  nota: number,
  ano: number
}

WinnerCard.displayName = 'WinnerCard'

export default WinnerCard
