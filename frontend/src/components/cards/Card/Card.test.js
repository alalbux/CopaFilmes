import React from 'react'
import { mount } from 'enzyme'
import Card from './Card'

describe('<Card />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Card />
    )

    console.log(component)

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
