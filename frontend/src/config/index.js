import environments from './environments'

export default {
  ...environments[process.env.ENV || 'development'],
  env: process.env.NODE_ENV || process.env.ENV
}

export const isTesting = () => [process.env.NODE_ENV, process.env.ENV].includes('test')
