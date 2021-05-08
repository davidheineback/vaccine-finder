import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getCliniques, getAppointmentTypes } from '../../App/fetch.js'
import { StyledCity } from './StyledCliniques'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'

function Cliniques() {
  const { county, setAppointmentData, appointmentData } = React.useContext(
    GlobalStateContext
  )
  const [cliniques, setCliniques] = useState([])
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [appointmentTypes, setAppointmentTypes] = useState([])

  useEffect(() => {
    async function fetchData() {
      await getCliniques(setCliniques, county)
    }
    county && fetchData()
  }, [county])

  console.log(cliniques)

  useEffect(() => {
    if (cliniques.length > 0) {
      const cityArray = cliniques.map((clinique) => clinique.city)
      setCities(
        [...new Set(cityArray)].filter((city) => city.length > 0).sort()
      )
    }
  }, [cliniques])

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [isLoading, setIsLoading])

  function handleCity({ target }) {
    const stationIds = cliniques
      .filter(
        (clinique) =>
          clinique.style.toLowerCase() === target.textContent.toLowerCase() ||
          clinique.name.toLowerCase().includes(target.textContent.toLowerCase())
      )
      .map((clinique) => clinique.id)
    console.log(stationIds)
    const data = stationIds.map(async (id) => {
      await getAppointmentTypes(setAppointmentTypes, id)
      return { id, appointmentTypes }
    })
    console.log(data)
    setAppointmentData(data)
  }

  if (!county) return <Redirect to='./' />
  if (appointmentData) return <Redirect to='./appointment' />
  return isLoading ? (
    <Loader />
  ) : (
    cities.map((city, index) => (
      <StyledCity onClick={handleCity} key={index}>
        {city}
      </StyledCity>
    ))
  )
}

export default Cliniques
