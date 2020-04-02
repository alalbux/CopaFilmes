import axios from 'axios' // eslint-disable-line import/no-extraneous-dependencies
import config from '../../config'

const apiAgent = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout
})

export default apiAgent
