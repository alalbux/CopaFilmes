import React from 'react'
import MovieCard from './MovieCard'
import { shallow } from 'enzyme'

test('it works', () => {
  const wrapper = shallow(<MovieCard />)
  expect(wrapper).toMatchSnapshot()
})