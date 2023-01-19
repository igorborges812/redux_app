import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from '../pages/Dashboard/Home'
import Products from '../pages/Dashboard/Products'
import PublicRoute from './PublicRoute'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<PublicRoute component={Home} />} />
        <Route
          path="/business/:id/products"
          element={<PublicRoute component={Products} />}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
