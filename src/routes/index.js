import React from 'react'
import { BrowserRouter, Route as Switch, Route } from 'react-router-dom'

import Home from '../Home'
import App from '../App'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
