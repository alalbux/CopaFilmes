import React from 'react'
import { shallow } from 'enzyme'
import Final from './Final'

test('it works', () => {
  const wrapper = shallow(<Final />)
  expect(wrapper).toMatchSnapshot()
})