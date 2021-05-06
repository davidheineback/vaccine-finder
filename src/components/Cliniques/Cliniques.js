import React, { useState, useEffect } from 'react'
import { getCliniques, getAppointmentTypes } from '../../App/fetch.js'
import { StyledCity, StyledLoader } from './StyledCliniques'




function Cliniques({ county }) {
const [cliniques, setCliniques] = useState([])
const [cities, setCities] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [appointmentTypes, setAppointmentTypes] = useState([])
const [renderState, setRenderState] = useState(1)
  
useEffect(() => { 
    async function fetchData () {
      await getCliniques(setCliniques, county)
    }
    fetchData()
    
   },[county])

   console.log(cliniques)

   useEffect(() => { 
    if (cliniques.length > 0) {
      const cityArray = cliniques.map(clinique => clinique.city)
      setCities([...new Set(cityArray)].filter(city => city.length > 0).sort())
      
    }
  },[cliniques])
  
  console.log(cities)

   useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  
    return () => {
      clearTimeout(timeId)
    }   
  },[isLoading, setIsLoading])
   
  function handleCity({ target }) {
    const stationIds = cliniques
      .filter(clinique => clinique.city === target.textContent)  
      .map(clinique => clinique.id)
    stationIds.map(id => { 
      getAppointmentTypes(setAppointmentTypes, id)
      console.log(appointmentTypes)
      return id
    })
  }
   
  return (
    isLoading ?
    <StyledLoader>
      <div/>
    </StyledLoader>
  : (cities.map((city, index) => {
    return (
      <StyledCity onClick={handleCity} key={index}>{city}</StyledCity>
    )
  }))
  )
}

export default Cliniques
