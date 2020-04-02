/* eslint-disable implicit-arrow-linebreak */
import apiAgent from './agent'

export const isAPIError = ({ data = {} }) =>
  !!(data.error && (data.code || data.message))

export const request = (method, endpoint, options = {}) =>
  new Promise((resolve, reject) => {
    let requestConfig = {
      method,
      url: endpoint,
      ...options
    }

    requestConfig = {
      headers: {},
      ...requestConfig
    }

    apiAgent
      .request(requestConfig)
      .then((res) => {
        const { data = {} } = res

        if (isAPIError(res)) return reject(data)

        return resolve(data)
      })
      .catch((err) => {
        const { response = {} } = err

        // eslint-disable-next-line prefer-promise-reject-errors
        return reject({ ...(response.data || {}), err })
      })
  })

export const get = (endpoint, requestConfig = {}) =>
  request('get', endpoint, requestConfig)
export const post = (endpoint, requestConfig = {}) =>
  request('post', endpoint, requestConfig)

export { apiAgent }

export default request
