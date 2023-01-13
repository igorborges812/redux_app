import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './components/CardProducts'
import api from './services/api'

export default function CardProducts() {
  const [product, setProducts] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get(`/product/business/${id}`)

      setProducts(response.data.data)
    }

    getProducts()
  }, [id])

  return (
    <Grid
      container
      // direction="row"
      marginLeft={5}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {product?.map(products => (
        <Grid item xs={2}>
          <Card
            // key={restaurante._id}
            name={products.name}
            url={products.imgs[0].url}
            description={products.description}
            pricing={products.pricing}
          />
        </Grid>
      ))}
    </Grid>
  )
}
