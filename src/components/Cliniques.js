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

function Cliniques({ city }) {
const [cliniques, setCliniques] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [appointmentTypes, setAppointmentTypes] = useState([])
  
useEffect(() => { 
    async function fetchData () {
      await getCliniques(setCliniques, city)
    }
    fetchData()
   },[city])

   console.log(cliniques)

  //  useEffect(() => { 
  //   cliniques.length > 0 && getAppointmentTypes(setAppointmentTypes, 1546)
    
  // },[cliniques])
  //  console.log(appointmentTypes)

   useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  
    return () => {
      clearTimeout(timeId)
    }   
  },[isLoading, setIsLoading])
   
   

  return (
    isLoading ?
    <StyledLoader>
      <div/>
    </StyledLoader>
  : appointmentTypes.map(appointmentType => {
    return (
      <div>{appointmentType.name}</div>
    )
  })
  )
}

export default Cliniques
