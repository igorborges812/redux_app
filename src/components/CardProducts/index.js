import { Grid } from '@mui/material'
import React from 'react'
import {
  ContainerProduct,
  TituloProduct,
  ImgProduct,
  SpanProduct,
  SpanPrice,
  QtdButton,
  Text,
  Botao
} from './styles'

export default function Card({ name, description, url, pricing }) {
  return (
    <ContainerProduct>
      <ImgProduct align="left" src={url}></ImgProduct>
      <TituloProduct>{name}</TituloProduct>
      <SpanProduct>{description}</SpanProduct>
      <SpanPrice>{pricing}</SpanPrice>

      <Botao>
        <QtdButton
        // onClick={() => onQuantityChange(product, product.quantity - 1)}
        // disabled={product.quantity === 1}
        // type="button"
        >
          -
        </QtdButton>
        <Text weight="bold" color="secondary" sm margin="0 8px">
          {/* {product.quantity} */}1
        </Text>
        <QtdButton
        // onClick={() => onQuantityChange(product, product.quantity + 1)}
        // type="button"
        >
          +
        </QtdButton>
      </Botao>
    </ContainerProduct>
  )
}
