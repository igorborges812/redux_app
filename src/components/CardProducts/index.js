import React from 'react'
import {
  ContainerProduct,
  TituloProduct,
  ImgProduct,
  SpanProduct,
  SpanPrice
} from './styles'

export default function Card({ name, description, url, pricing }) {
  return (
    <ContainerProduct>
      <ImgProduct align="left" src={url}></ImgProduct>
      <TituloProduct>{name}</TituloProduct>
      <SpanProduct>{description}</SpanProduct>
      <SpanPrice>{pricing}</SpanPrice>
    </ContainerProduct>
  )
}
