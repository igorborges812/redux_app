import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Card from './components/CardProducts'
import api from './services/api'
// import { Container, Li } from './styles'

export default function CardProducts() {
  const [product, setProducts] = useState([])

  const { id } = useParams()

  const getProducts = async () => {
    const response = await api.get(`/product/business/${id}`)

    setProducts(response.data.data)
    console.log(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {product?.map(products => (
        <Card
          // key={restaurante._id}
          name={products.name}
          url={products.url}
          description={products.description}
          pricing={products.pricing}
        />
      ))}
    </div>
  )
}
