import React, { Component } from 'react'
import api from './services/api'
import Card from './components/Card'

class Home extends Component {
  state = {}

  async componentDidMount() {
    const response = await api.get('')

    this.setState({ restaurantes: response.data })
  }

  render() {
    const { restaurantes } = this.state
    console.log(restaurantes)
    return (
      <div>
        {restaurantes?.data.map(restaurante => (
          <Card
            // key={restaurante._id}
            name={restaurante.name}
            description={restaurante.description}
            street_name={restaurante.address.street_name}
            street_number={restaurante.address.street_number}
            neighborhood={restaurante.address.neighborhood}
          />
        ))}
      </div>
    )
  }
}
export default Home
