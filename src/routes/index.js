import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from '../Home'
import App from '../App'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
