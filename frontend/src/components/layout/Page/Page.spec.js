import React from 'react'
import Page from './Page'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Page />)
  expect(wrapper).toMatchSnapshot()
})