import React from 'react'
import { StyledButton } from './StyledButton'
 
function Button({ btnType, onClick, children }) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      btnType={btnType}>
      {children}
      </StyledButton>
  )
}

export default Button


