import React from 'react'
import Title from './Title'
import { shallow } from 'enzyme'

test('it works H1', () => {
  const wrapper = shallow(<Title.H1 />)
  expect(wrapper).toMatchSnapshot()
})


test('it works H2', () => {
  const wrapper = shallow(<Title.H2 />)
  expect(wrapper).toMatchSnapshot()
})


test('it works H3', () => {
  const wrapper = shallow(<Title.H3 />)
  expect(wrapper).toMatchSnapshot()
})


test('it works H4', () => {
  const wrapper = shallow(<Title.H4 />)
  expect(wrapper).toMatchSnapshot()
})
