// import { display } from '@mui/system'
import React from 'react'
import { Container, Li, Span, P, Titulo, Img, Texto, Logo } from './styles'

export default function Card({
  name,
  street_name,
  street_number,
  neighborhood,
  description,
  logo,
  onClick
}) {
  return (
    <Li>
      <Container onClick={onClick}>
        <Logo>
          <Img align="left" src={logo}></Img>
        </Logo>
        <Texto>
          <Titulo>{name}</Titulo>
          <P>{description}</P>
          <Span>
            {street_name}, {street_number}, {neighborhood}
          </Span>
        </Texto>
      </Container>
    </Li>
  )
}
