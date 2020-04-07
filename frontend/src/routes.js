import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Root } from './containers'
import GlobalStyles from './styles/GlobalStyles'

const Routes = () => (
  <div>
	  <GlobalStyles />
    <Switch>
      <Route exact path='/' component={Root} />
    </Switch>
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default Router
