import { oneOf, node, bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

import * as V from '../../../styles//variables'

const Button = styled.button`
  background-color: ${V.Color.grayDark};
  border: none;
  padding: 8px 16px;
  margin: 10px 0 0;
  color: ${V.Color.white};
  font-weight: bold;
  font-size: 16px;
  text-align: ${props => props.align};
  line-height: 1.15;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  &:hover {
    color: ${V.Color.secondary};
    background-color: ${V.Color.grayLight};
  }
  ${props => props.active && css`
    path {
      fill: #ee0099!important;
    }
  `}
  ${props => props.disabled && css`
    cursor: not-allowed;
    background-color: ${V.Color.grayLight};
    color: ${V.Color.grayDark};
  `}
`

Button.propTypes = {
  children: node,
  disabled: bool,
  active: bool,
  color: string,
  type: string,
  align: oneOf(['center', 'left', 'right'])
}

Button.defaultProps = {
  align: 'center',
  type: 'button'
}

Button.displayName = 'Button'

export default Button
