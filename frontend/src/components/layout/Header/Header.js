import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import Flexbox from '../Flexbox/Flexbox'
const HeaderContainer = styled.div`
  background: #6e6e6e;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  min-height: 30vh;
  padding: 36px;
`

const Header = ({ children }) => (
  <HeaderContainer>
    <Flexbox vertical middle>
      {children}
    </Flexbox>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
