import React from 'react'
import Card from './Card'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Card />)
  expect(wrapper).toMatchSnapshot()
})