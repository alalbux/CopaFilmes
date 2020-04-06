/* eslint-disable no-unused-vars */
import MockAdapter from 'axios-mock-adapter'
import apiAgent from '../agent'
import { sendChampionshipResource } from './subscribeRegisterToken'
import {
  subscribeRegisterTokenFixture
} from '../../serializers/fixtures/subscribeRegisterTokenFixture'

import * as serializers from '../../serializers/subscribeRegisterTokenSerializer'

let mock = null

describe('sendChampionshipResource()', () => {
  it('should be exported as a function', () => {
    expect(sendChampionshipResource).toBeInstanceOf(Function)
  })

  describe('success', () => {
    beforeEach(() => {
      mock = new MockAdapter(apiAgent)

      mock.onPost('/v1/subscribers').reply(200, subscribeRegisterTokenFixture)
    })

    afterEach(() => {
      mock.restore()
    })

    it('should return response with subscribeRegisterTokenSerializer', (done) => {
      sendChampionshipResource().then((tokenResponse) => {
        expect(tokenResponse).toEqual(
          serializers.subscribeRegisterTokenSerializer(subscribeRegisterTokenFixture)
        )

        done()
      })
    })

    it('should call "subscribeRegisterTokenSerializer"', (done) => {
      const spy = jest.spyOn(serializers, 'subscribeRegisterTokenSerializer')

      sendChampionshipResource().then((tokenResponse) => {
        expect(spy).toHaveBeenCalledWith(tokenResponse)

        spy.mockRestore()
        done()
      })
    })
  })

  describe('error', () => {
    beforeEach(() => {
      mock = new MockAdapter(apiAgent)

      mock.onPost('/v1/subscribers').reply(400, {})
    })

    afterEach(() => {
      mock.restore()
    })

    it('should call "Promise.error" with the error object', (done) => {
      const spy = jest.spyOn(Promise, 'reject')

      sendChampionshipResource().catch((error) => {
        expect(error).toBeDefined()

        // To make sure it's using the mocked version
        expect(error.err.response.status).toEqual(400)
        expect(error.err.response.data).toEqual({})
        expect(error.err.config.method).toEqual('post')
        expect(error.err.config.url).toMatch(/\/v1\/subscribers$/)

        expect(spy).toHaveBeenCalledWith(error)

        spy.mockRestore()
        done()
      })
    })
  })
})
