import React from 'react'
import styled from 'styled-components'
import {
  Header,
  Title
} from '../../components'

const Subtitle = styled(Title.H2)`
  margin-top: 16px;
`

const Details = styled(Title.H3)`
  margin-top: 16px;
`

const FinalHeader = () => (
  <Header>
    <Subtitle>Campeonato de Filmes</Subtitle>
    <Title.H1>Resultado Final</Title.H1>
    <Details>Veja o resultado final do Campeonato de filmes de forma simples e rápida</Details>
  </Header>
)

export default FinalHeader