import apiAgent from './agent'
import config from '../../config/environments'

describe('apiAgent', () => {
  it('should import without errors', () => {
    expect(apiAgent).toBeDefined()
  })

  it('should have a default baseURL', () => {
    expect(apiAgent.defaults.baseURL).toBeDefined()
  })

  it('should have the `baseURL` on config', () => {
    expect(apiAgent.defaults.baseURL)
      .toEqual('https://filmschampions20200402090325.azurewebsites.net/')
  })

  it('should have a default timeout', () => {
    expect(apiAgent.defaults.timeout).toBeDefined()
  })

  it('should have the `timeout` on config', () => {
    expect(apiAgent.defaults.timeout).toEqual(30000)
  })
})
