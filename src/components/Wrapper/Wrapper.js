import { formatMs } from '@material-ui/core'
import React from 'react'
import {StyledWrapper} from './StyledWrapper'

const Wrapper = ({ children }) => {
  return <StyledWrapper maxWidth='lg'>{children}</StyledWrapper>
}

export default Wrapper
