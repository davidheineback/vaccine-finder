import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {StyledAppContainer} from './StyledAppContainer'

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
