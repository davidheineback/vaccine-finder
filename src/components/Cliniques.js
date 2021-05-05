import React, { useState, useEffect } from 'react'
import { getCliniques, getAppointmentTypes } from '../fetch.js'
import styled from 'styled-components'


const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
  margin-top:40%;

& div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.heart};
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

& div:after,
 div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.heart}
}

& div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
& div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`

const StyledCity = styled.div`
display: inline-flex;
padding: 12px;
border-radius: 20px;
border: 1px solid lightblue;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin: 5px;
&:hover {
  background: lightblue;
}
`

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
