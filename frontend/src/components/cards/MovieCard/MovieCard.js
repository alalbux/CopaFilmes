import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'
import {
  Card
} from '../../index'

import Flexbox from '../../layout/Flexbox/Flexbox'

const MovieCardContainer = styled(Card)`
  text-align: center;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  min-height: 200px;
  margin: 16px auto;
`

const Label = styled.span`
  display: block;
  font-weight: bold;
  font-size: 14px;
`

const ValueContainer = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const MovieCard = ({ movie }) => (
  <MovieCardContainer>
    <Flexbox middle wrap>
      <ValueContainer>
        <Label>Filme</Label>
      </ValueContainer>
    </Flexbox>
  </MovieCardContainer>
)

MovieCard.propTypes = {
  movie: shape({
    Title: string
  })
}

MovieCard.displayName = 'MovieCard'

export default MovieCard
