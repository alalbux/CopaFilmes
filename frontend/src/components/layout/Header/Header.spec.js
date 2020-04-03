import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})