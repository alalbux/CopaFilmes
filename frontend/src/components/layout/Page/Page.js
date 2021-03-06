import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: #a8a8a8;
  max-width: 1360px;
  padding: 36px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`

const Page = ({ children }) => (
  <PageContainer>
    {children}
  </PageContainer>
)

Page.propTypes = {
  children: oneOfType([node, func])
}

Page.displayName = 'Page'

export default Page
