import axios from 'axios' // eslint-disable-line import/no-extraneous-dependencies

const apiAgent = axios.create({
  baseURL: 'https://filmschampions20200402090325.azurewebsites.net/',
  timeout: 30000
})

export default apiAgent
