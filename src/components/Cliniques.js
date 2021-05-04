import React, { useState, useEffect } from 'react'
import { getCliniques } from '../fetch.js'

function Cliniques() {
const [cliniques, setCliniques] = useState([])

  useEffect(() => { 
    getCliniques(setCliniques)
    
   },[])

   console.log(cliniques)

  return (
    <div>
    </div>
  )
}

export default Cliniques
