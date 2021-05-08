import React from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'

function SelectAppointment() {
  const { appointmentData } = React.useContext(GlobalStateContext)
  console.log(appointmentData)

  if (!appointmentData) return <Redirect to='./' />
  return <div></div>
}

export default SelectAppointment
