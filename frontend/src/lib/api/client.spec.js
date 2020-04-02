import MockAdapter from 'axios-mock-adapter'
import {
  get,
  post,
  request
} from './client'

import apiAgent from './agent'

let mock = null

describe('get()', () => {
  beforeEach(() => {
    mock = new MockAdapter(apiAgent)

    mock.onGet('/GET_ENDPOINT').reply(200, { ping: 'pong', method: 'GET' })
  })

  afterEach(() => {
    mock.restore()
  })

  it('should do a `GET` request', () => {
    get('/GET_ENDPOINT').then((response) => {
      expect(response.ping).toEqual('pong')
      expect(response.method).toEqual('GET')
    })
  })
})

describe('post()', () => {
  beforeEach(() => {
    mock = new MockAdapter(apiAgent)

    mock.onPost('/POST_ENDPOINT').reply(200, { ping: 'pong', method: 'POST' })
  })

  afterEach(() => {
    mock.restore()
  })


  it('should do a `POST` request', () => {
    post('/POST_ENDPOINT').then((response) => {
      expect(response.ping).toEqual('pong')
      expect(response.method).toEqual('POST')
    })
  })
})

describe('request()', () => {
  beforeEach(() => {
    mock = new MockAdapter(apiAgent)

    mock.onPost('/some/post/endpoint').reply(200, { pong: 'ping', method: 'POST' })
    mock.onGet('/some/get/endpoint').reply(200, { ping: 'pong', method: 'GET' })
  })

  afterEach(() => {
    mock.restore()
  })


  it('should call the equivalent method on axios', () => {
    request('get', '/some/get/endpoint').then((response) => {
      expect(response.ping).toEqual('pong')
      expect(response.method).toEqual('GET')
    })

    request('post', '/some/post/endpoint').then((response) => {
      expect(response.pong).toEqual('ping')
      expect(response.method).toEqual('POST')
    })
  })
})
