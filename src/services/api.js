import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-test.api.razzo.tech/'
  // timeout: 30000,
})

export default api
