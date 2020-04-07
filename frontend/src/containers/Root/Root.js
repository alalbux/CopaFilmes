import React, { Component, Fragment } from 'react'
import {
  Flexbox,
  Page
} from '../../components'

import DefaultHeader from './DefaultHeader'
import FinalHeader from './FinalHeader'
import MoviesList from './MoviesList'
import WinnersList from './WinnersList'

import { getMoviesResource } from '../../lib/api/resources/movies'
import { sendChampionshipResource } from '../../lib/api/resources/championship'

class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      winners:[],
      competitors: [],
      isLoading: false,
      checked: false,
      finalResult: false
    }

    this.setMovies = this.setMovies.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.fetchChampionship = this.fetchChampionship.bind(this)
  }

  componentDidMount() {
    this.fetchMovies()
    this.setState({
      isLoading: false
    })
  }

  setMovies(movies) {
    this.setState({
      movies,
      isLoading: false
    })
  }

  setWinners(winners) {
    this.setState({
      winners,
      finalResult: true
    })
  }

  async fetchChampionship() {
    const data = await sendChampionshipResource(this.state.competitors)

    this.setState({ isLoading: true })

    const winners = data
    
    this.setWinners(winners)
  }

  async fetchMovies() {
    const data = await getMoviesResource()

    this.setState({ isLoading: true })

    const movies = data
    
    this.setMovies(movies)
  }

  handleCheckboxChange(movie) {
    const isChecked = !this.state.checked

    this.setState({
      checked: isChecked,
      competitors: [...this.state.competitors, movie]
    })
  }

  render () {
    const {
      movies = [],
      winners = [],
      finalResult = false
    } = this.state

    return (
      <Page>
        <Flexbox vertical>
          {finalResult ? (
            <Fragment>
              <FinalHeader /> 
              <WinnersList winners={winners}/>
            </Fragment>
          ) : (
            <Fragment>
              <DefaultHeader />
              <MoviesList
                onHandleChampionship={this.fetchChampionship}
                onHandleCheckboxChange={this.handleCheckboxChange} 
                movies={movies}
              />
            </Fragment>
          )}
        </Flexbox>
      </Page>
    )
  }
}

export default Root
