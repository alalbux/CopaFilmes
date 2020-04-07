import React, { Component } from 'react'
import { number, string, func, bool } from 'prop-types'
import styled from 'styled-components'
import {
  Card
} from '../../index'

import Flexbox from '../../layout/Flexbox/Flexbox'

const WinnerCardContainer = styled(Card)`
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  min-height: 100px;
  margin: 16px auto;
`

const Label = styled.span`
  display: block;
  font-weight: bold;
  font-size: 14px;
`

const ValueContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
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
        <Flexbox middle wrap>
          <ValueContainer>
            <Flexbox middle wrap>
              <Label>{titulo} - {ano}</Label>
            </Flexbox>
            <Label>{nota}</Label>
          </ValueContainer>
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
