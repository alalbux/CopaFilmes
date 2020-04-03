import React from 'react'
import Text from './Text'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<Text />)
  expect(wrapper).toMatchSnapshot()
})