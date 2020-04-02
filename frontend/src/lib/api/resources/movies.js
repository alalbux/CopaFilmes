import { get } from '../client'
import { moviesSerializer } from '../../serializers/movies'

export const getMoviesResource = async (params = {}) => { // eslint-disable-line
  return get('/Movies', { ...params })
    .then((response) => moviesSerializer(response))
    .catch((error) => Promise.reject(error))
}

export default getMoviesResource
