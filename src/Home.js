import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './services/api'
import Card from './components/Card'

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
    <div>
      {restaurantes?.map(restaurante => (
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
      ))}
    </div>
  )
}
export default Home
