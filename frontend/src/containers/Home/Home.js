import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Header,
  Flexbox,
  Page,
  Title,
  Button,
  MovieCard
} from '../../components'

import { getMoviesResource } from '../../lib/api/resources/movies'
import { sendChampionshipResource } from '../../lib/api/resources/championship'

const Subtitle = styled(Title.H2)`
  margin-top: 16px;
`

const Details = styled(Title.H3)`
  margin-top: 16px;
`

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      winners:[],
      competitors: [],
      isLoading: false,
      checked: false
    }


    this.setMovies = this.setMovies.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.fetchChampionship = this.fetchChampionship.bind(this)
  }

  componentDidMount() {
    this.fetchMovies()
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
      isLoading: false
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

  handlerCompetitorsList() {
    const competitorsList = this.state.competitors

    this.setState({competitors: competitorsList}) 
  }

  render () {
    const {
      movies = [],
      isLoading = false,
      checked = false
    } = this.state

    return (
      <Page>
        <Flexbox vertical>
          <Header>
            <Subtitle>Campeonato de Filmes</Subtitle>
            <Title.H1>Fase de seleção </Title.H1>
            <Details>Selecione 8 filmes que voce deseja que entrem na competiçao e depois pressione o botao Gerar Meu Campeonato para prosseguir</Details>
          </Header>

          {!isLoading ? (
            <Flexbox wrap>
              {movies.map(movie => {
                return (
                  <MovieCard
                    key={movie.id}
                    handlerChecked={() => this.handleCheckboxChange(movie)}
                    {...movie}
                  />
                )
              })}
            </Flexbox>
          ) : null}
          <Button onClick={this.fetchChampionship}>Gerar Meu Campeonato</Button>
        </Flexbox>
      </Page>
    )
  }
}

export default Home
