import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

test('it works', () => {
  const wrapper = shallow(<Home />)
  expect(wrapper).toMatchSnapshot()
})