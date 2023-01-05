import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-test.api.razzo.tech/business'
  // timeout: 30000,
})

export default api
