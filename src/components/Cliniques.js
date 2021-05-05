import React, { useState, useEffect } from 'react'
import { getCliniques } from '../fetch.js'

function Cliniques({ city }) {
const [cliniques, setCliniques] = useState([])

  useEffect(() => { 
    getCliniques(setCliniques, city)
   },[city])

   console.log(cliniques)

  return (
    <div>
    </div>
  )
}

export default Cliniques
