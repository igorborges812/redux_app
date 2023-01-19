import React from 'react'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import elipse from '../../assets/img/elipse.png'
// import { Grid } from '@mui/material'
import Chevron from 'react-chevron'
import { CartLogo, Dashboard, ImgLogo, ImgPerfil, Navbar, Seta } from './style'

function Header() {
  return (
    <Navbar>
      <ImgLogo className="Logo" src={logo} alt="Logo Razzo" />
      <Dashboard>Dashboard</Dashboard>

      <div>
        <ImgPerfil src={elipse} alt="Perfil" />
        <Seta>
          <Chevron />
        </Seta>
      </div>

      <CartLogo>
        <ImgPerfil src={cart} alt="Sacola" />
      </CartLogo>
    </Navbar>
  )
}

export default Header
