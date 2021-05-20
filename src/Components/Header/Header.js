import React from 'react'
import { StyledHeader, StyledImg } from './StyledHeader'

const Header = ({ children }) => {
  return <StyledHeader >{children}
    <StyledImg/>
  </StyledHeader>
}

export default Header