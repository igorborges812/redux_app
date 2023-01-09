import axios from 'axios'

const apiProducts = axios.create({
  baseURL:
    'https://api-test.api.razzo.tech/product/business/609efc6aa16e1fb123f9574c'
  // timeout: 30000,
})

export default apiProducts
