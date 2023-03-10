import React from 'react'
import './Home.css'
import logo from './img/logo.png'
import cart from './img/cart.png'
import elipse from './img/elipse.png'
// import { Grid } from '@mui/material'
import Chevron from 'react-chevron'

function Home() {
  return (
    <div className="navbar">
      <img className="Logo" src={logo} alt="Logo Razzo" />
      <div className="Dashboard">Dashboard</div>

      <div className="perfil">
        <img src={elipse} alt="Perfil" />
        <div className="seta">
          <Chevron />
        </div>
      </div>

      <div className="Cart-logo">
        <img src={cart} alt="Sacola" />
      </div>
    </div>
  )
}
export default Home
