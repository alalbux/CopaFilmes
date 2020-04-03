import React from 'react'
import Checkbox from './Checkbox'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Checkbox />)
  expect(wrapper).toMatchSnapshot()
})