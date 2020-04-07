import React from 'react'
import { Root } from './containers'
import GlobalStyles from './styles/GlobalStyles'

const Routes = () => (
  <div>
    <GlobalStyles />
     <Root />
  </div>
)

const Router = () => <Routes />

export default Router
