import React from 'react'
import Box from '@material-ui/core/Box'

const Wrapper = ({ children }) => {
  return (
    <Box component='span' m={1}>
      {children}
    </Box>
  )
}

export default Wrapper
