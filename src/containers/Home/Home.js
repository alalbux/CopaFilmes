import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Header,
  Flexbox,
  Page,
  Title
} from '../../components'

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
      data: [],
      isLoading: true
    }
  }

  render () {
    return (
      <Page>
        <Flexbox vertical>
          <Header>
            <Subtitle>Campeonato de Filmes</Subtitle>
            <Title.H1>Fase de seleção </Title.H1>
            <Details>Selecione 8 filmes que voce deseja que entrem na competiçao e depois pressione o botao Gerar Meu Campeonato para prosseguir</Details>
          </Header>
        </Flexbox>
      </Page>
    )
  }
}

export default Home
