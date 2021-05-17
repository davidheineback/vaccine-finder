import React, { useState } from 'react'
import moment from 'moment'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [county, setCounty] = useState()
  const [redirect, setRedirect] = useState(false)
  const [appointmentData, setAppointmentData] = useState()
  const [cliniques, setCliniques] = useState([])
  const [fromDate, setFromDate] = useState(moment().format("YYMMDD"))
  const [toDate, setToDate] = useState(moment().add(30, 'days').format("YYMMDD"))
 
  const state = {
    county,
    setCounty,
    redirect,
    setRedirect,
    appointmentData,
    setAppointmentData,
    cliniques,
    setCliniques,
    fromDate,
    setFromDate,
    toDate,
    setToDate
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}
