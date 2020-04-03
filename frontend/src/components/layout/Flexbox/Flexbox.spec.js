import React from 'react'
import Flexbox from './Flexbox'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Flexbox />)
  expect(wrapper).toMatchSnapshot()
})