import React from 'react'

import PropTypes from 'prop-types'

import Public from '../../pages/Layout/Public'

const PublicRoute = ({ component: Component, title = null, ...rest }) => (
  <Public name={title}>
    <Component />
  </Public>
)

PublicRoute.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

export default PublicRoute
