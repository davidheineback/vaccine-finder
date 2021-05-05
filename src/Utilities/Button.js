import styled from 'styled-components'
import React from 'react'

export const StyledButton = styled.button`
appearance: none;
border: 0;
border-radius: 100px;
box-shadow: none;
cursor: pointer;
font-weight: 700;
letter-spacing: 2px;
padding: 0.7rem;
text-transform: uppercase;
&:hover {
background: ${props => props.theme.colors.mainHover};
color: ${props => props.theme.fontColors.mainHover};
}

${props => props.btnType === 'primary' && {
  minWidth: "260px",
  width: "fit-content",
  marginTop: "10px",
  marginLeft: "5px",
  marginRight: "5px",
  background: props.theme.colors.main,
  color: props.theme.fontColors.main,
  ":hover": {
    background: props.theme.colors.main,
    color: props.theme.fontColors.mainHover,
  }
}}
`

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


