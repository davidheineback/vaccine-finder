import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'



const AppContainer = ({children}) => {

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{ height: '100vh' }}
        />
        {children}
      </Container>
    </>
  )
}

export default AppContainer
