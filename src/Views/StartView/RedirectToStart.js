import React from 'react'
import { Redirect } from 'react-router-dom'

function RedirectToStart() {
  return (
    <Redirect push to='/'/>
  )
}

export default RedirectToStart
