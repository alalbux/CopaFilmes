/* eslint-disable camelcase */
import { random } from 'lodash'
import { moviesSerializer } from './movies'
import { moviesFixture } from './fixtures/moviesFixture'

describe('moviesSerializer()', () => {
  describe('when called with success response', () => {
    it('should have a movies attribute equal to an array', () => {
      expect(
        moviesSerializer(moviesFixture)
      ).toHaveProperty('movies', expect.any(Array))
    })

    it('should transform `id` attribute in data.result.movies[index].id to `id`', () => {
      const index = random(0, moviesFixture.length - 1)
      const item = moviesFixture.movies[index]

      expect(
        moviesSerializer(moviesFixture).movies[
          index
        ].id
      ).toEqual(item.id)
    })
  })
})
