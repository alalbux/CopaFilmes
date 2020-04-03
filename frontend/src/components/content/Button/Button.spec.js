import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Button />)
  expect(wrapper).toMatchSnapshot()
})