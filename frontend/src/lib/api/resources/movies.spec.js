import MockAdapter from 'axios-mock-adapter'
import { getMoviesResource } from './movies'
import apiAgent from '../agent' // Just to use `MockAdapter`
import { moviesSerializer } from '../../serializers/movies'
import { moviesFixture } from '../../serializers/fixtures/moviesFixture'

let mock = null

describe('getMoviesResource()', () => {
  it('should be exported as a function', () => {
    expect(getMoviesResource).toBeInstanceOf(Function)
  })

  describe('success', () => {
    beforeEach(() => {
      mock = new MockAdapter(apiAgent)

      mock.onGet('/Movies').reply(200, moviesFixture)
    })

    afterEach(() => {
      mock.restore()
    })

    it('should return response with moviesSerializer', done => {
      getMoviesResource().then(movies => {
        expect(movies).toEqual(
          moviesSerializer(moviesFixture)
        )

        done()
      })
    })
  })
})
