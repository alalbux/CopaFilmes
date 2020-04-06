import { post } from '../client'
import { sendChampionshipSerializer } from '../../serializers/championship'

export const sendChampionshipResource = (value, params = {}) => {
  let result = value.map(item => ({...item}))

  const requestConfig = {
    ...params,
    data: [...result]
  }

  return post('Championship', requestConfig)
    .then((response) => sendChampionshipSerializer(response))
    .catch((error) => Promise.reject(error))
}

export default sendChampionshipResource
