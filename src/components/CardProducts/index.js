import React from 'react'
import {
  ContainerProduct,
  Li,
  Span,
  P,
  Titulo,
  Img,
  Texto,
  Logo
} from './styles'

export default function Card({ name, description, url, pricing }) {
  return (
    <Li>
      <ContainerProduct>
        <Logo>
          <Img align="left" src={url}></Img>
        </Logo>
        <Texto>
          <Titulo>{name}</Titulo>
          <P>{description}</P>
          <Span>{pricing}</Span>
        </Texto>
      </ContainerProduct>
    </Li>
  )
}
