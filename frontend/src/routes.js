import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Final from './containers/Final/Final'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/final' component={Final} />
    </Switch>
  </div>
)

const Router = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default Router