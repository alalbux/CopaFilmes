import React from 'react'
import { shallow } from 'enzyme'
import Root from './Root'

test('it works', () => {
  const wrapper = shallow(<Root />)
  expect(wrapper).toMatchSnapshot()
})
