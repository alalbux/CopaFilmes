import React from 'react'
import styled from 'styled-components'

import * as V from '../../../styles//variables'

const Checkbox = styled(({ children, className, ...inputProps }) => (
  <label className={className}>
    <input type='checkbox' {...inputProps} />
    <span>{children}</span>
    <div className='box' />
  </label>
))`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & .box {
    position: absolute;
    top: 3px;
    left: 0;
    height: 17px;
    width: 17px;
    background: #fff;
    border: 1px solid #4a4a4a;
    border-radius: 4px;
  }
  &:hover input:not([disabled]) ~ .box,
  & input:not([disabled]):focus ~ .box {
    border-color: ${V.Color.gray};
  }
  & input:checked ~ .box {
    background: ${V.Color.secondary};
    border-color: ${V.Color.secondary};
  }
  & input:disabled:checked ~ .box {
    background: #d1cdd2;
  }
  &:hover input:not([disabled]):checked ~ .box,
  & input:checked:focus ~ .box {
    background: ${V.Color.secondary};
    border-color: ${V.Color.secondary};
  }
  & input:disabled ~ .box {
    border-color: #d1cdd2;
    opacity: 0.6;
    pointer-events: none;
  }
  & input:disabled ~ span {
    color: #d1cdd2;
  }
  & input:checked ~ .box:after {
    display: block;
  }
  & .box:after {
    content: '';
    position: absolute;
    display: none;
    left: 5px;
    top: 0px;
    width: 4px;
    height: 10px;
    border: solid #fff;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
`

Checkbox.displayName = 'Checkbox'

export default Checkbox
