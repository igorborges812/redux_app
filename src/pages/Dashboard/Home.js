import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Card from '../../components/Card'
import { Grid, Pagination } from '@mui/material'

import Searchbar from '../../components/Searchbar'
import { SearchbarContainer } from '../../components/Searchbar/styles'
import { Container } from '@mui/system'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState([])

  const navigate = useNavigate()

  const getRestaurantes = async () => {
    const response = await api.get('/business')

    setRestaurantes(response.data.data)
  }

  useEffect(() => {
    getRestaurantes()
  })

  return (
    <Grid
      container
      // direction="row"
      marginLeft={5}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Searchbar></Searchbar>

      {restaurantes?.map(restaurante => (
        <Grid item xs={2}>
          <Card
            // key={restaurante._id}
            onClick={() => navigate(`/business/${restaurante._id}/products`)}
            name={restaurante.name}
            logo={restaurante.assets.logo}
            description={restaurante.description}
            street_name={restaurante.address.street_name}
            street_number={restaurante.address.street_number}
            neighborhood={restaurante.address.neighborhood}
          />
        </Grid>
      ))}

      <Container>
        <Pagination numbPages={1} />
      </Container>
    </Grid>
  )
}
export default Home