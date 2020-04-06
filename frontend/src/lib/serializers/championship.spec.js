/* eslint-disable camelcase */
import { championshipSerializer } from './championshipSerializer'
import { championshipFixture } from './fixtures/championshipFixture'

describe('championshipSerializer()', () => {
  describe('when called with sendChampionship success response', () => {
    it('should have a id attribute equal to an string', () => {
      expect(
        championshipSerializer(championshipFixture)
      ).toHaveProperty('title', expect.any(String))
    })
  })
})
