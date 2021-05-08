import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import styled  from 'styled-components'

const StyledAppContainer = styled(Container)`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:100vh;
`

const AppContainer = ({children}) => {

  return (
    <>
      <CssBaseline />
      <StyledAppContainer maxWidth='lg'>
      {children}

      </StyledAppContainer>
    </>
  )
}

export default AppContainer
