import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from '../Home'
import App from '../App'
import Products from '../Products'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/business/:id/products" element={<Products />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
