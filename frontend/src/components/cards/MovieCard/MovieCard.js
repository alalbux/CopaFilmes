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
  max-width: 230px;
  min-height: 100px;
  margin: 16px auto;
`

const Label = styled.span`
  display: block;
  font-size: 14px;
`

const Title = styled.strong`
  display: block;
  font-weight: bold;
  font-size: 14px;
`

const ValueContainer = styled(Flexbox)`
  width: 100%;
`

const DetailsContainer = styled(Flexbox)`
  width: 100%;
`

const CheckboxContainer = styled(Flexbox)`    
  width: 100%;
  margin: 0 10px 20px 0;
  height: 30px;
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
        <Flexbox >
          <ValueContainer vertical justify="space-between">
            <CheckboxContainer justify="flex-start">
              <Checkbox
                checked={isChecked}
                key={id}
                onClick={handlerChecked}
                type="checkbox"
                value={titulo} 
              >
                <Title>{titulo}</Title>
              </Checkbox>
            </CheckboxContainer>
            <DetailsContainer vertical end>
              <Label>Ano: {ano}</Label>
              <Label>Nota: {nota}</Label>
            </DetailsContainer>
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
