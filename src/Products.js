import React, { useEffect, useState } from 'react'
// import { Container, Li } from './styles'
import apiProducts from './services/apiProducts'

export default function CardProducts() {
  const [lanches, setLanches] = useState([])

  useEffect(() => {}, [])
  apiProducts.get('lanches').then(({ data }) => {})
  setLanches(lanches)
  console.log(lanches)
  //es-lint-disable-next-line react-hooks/exhaustive-deps
  return <div>teste</div>
}
