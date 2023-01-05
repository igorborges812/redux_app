import React from 'react'
import { Container, Li, Span, P, Titulo } from './styles'

export default function Card({
  name,
  street_name,
  street_number,
  neighborhood,
  description
}) {
  return (
    <Li>
      <Container>
        <Titulo>{name}</Titulo>
        <P>{description}</P>
        <Span>
          {street_name}, {street_number}, {neighborhood}
        </Span>
      </Container>
    </Li>
  )
}
