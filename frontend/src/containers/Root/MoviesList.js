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

  return (
    <div>
      <Flexbox end>
        <Button onClick={onHandleChampionship}>Gerar Meu Campeonato</Button>
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
