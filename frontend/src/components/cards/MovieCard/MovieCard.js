import React, { Component } from 'react'
import { number, string, func, bool } from 'prop-types'
import styled from 'styled-components'
import {
  Card,
  Checkbox
} from '../../index'

import Flexbox from '../../layout/Flexbox/Flexbox'

const MovieCardContainer = styled(Card)`
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
class MovieCard extends Component {
  render () {
    const {
      id,
      titulo,
      ano,
      nota,
      handlerChecked,
      isChecked
    } = this.props

    return (
      <MovieCardContainer>
        <Flexbox middle wrap>
          <ValueContainer>
            <Flexbox middle wrap>
              <Checkbox 
                checked={isChecked}
                key={id}
                onClick={handlerChecked}
                type="checkbox"
                value={titulo} 
              />
              <Label>{titulo} - {ano}</Label>
            </Flexbox>
            <Label>{nota}</Label>
          </ValueContainer>
        </Flexbox>
      </MovieCardContainer>
    )
  }
}

MovieCard.propTypes = {
  id: string,
  titulo: string,
  nota: number,
  ano: number,
  isChecked: bool,
  handlerChecked: func
}

MovieCard.displayName = 'MovieCard'

export default MovieCard
