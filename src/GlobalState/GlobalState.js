import React, { useState } from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [county, setCounty] = useState()

  const state = {
    county,
    setCounty
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}