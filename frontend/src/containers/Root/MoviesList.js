import React from 'react'
import {
  arrayOf,
  shape,
  func
} from 'prop-types'
import { 
  MovieCard,
  Flexbox,
  Button
} from '../../components'

const MoviesList = ({
  movies,
  competitors,
  onHandleCheckboxChange,
  onHandleChampionship
}) => {
  const moviesComponent = movies.map((movie) => {
    return (
        <MovieCard
            key={movie.id}
            handlerChecked={() => onHandleCheckboxChange(movie)}
            {...movie}
        />
    )
  })

  const isDisabled = () => {
    if (competitors.lenght >= 9) {
      return true
    }

    return false 
  }

  return (
    <div>
      <Flexbox end>
        <Button disabled={isDisabled()} onClick={onHandleChampionship}>Gerar Meu Campeonato</Button>
      </Flexbox>
      <Flexbox wrap>
        {moviesComponent}
      </Flexbox>
    </div>
  )
}

MoviesList.defaultProps = {
  movies: []
}

MoviesList.propTypes = {
  movies: arrayOf(
    shape({})
  ),
  onHandleCheckboxChange: func,
  onHandleChampionship: func
}

export default MoviesList
