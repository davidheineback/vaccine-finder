import React, { useState } from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [county, setCounty] = useState()
  const [redirect, setRedirect] = useState(false)
  const [appointmentData, setAppointmentData] = useState()
  const [cliniques, setCliniques] = useState([])
  const [searchStrategy, setSearchStrategy] = useState()
 
  const state = {
    county,
    setCounty,
    redirect,
    setRedirect,
    appointmentData,
    setAppointmentData,
    cliniques,
    setCliniques,
    searchStrategy,
    setSearchStrategy
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}
