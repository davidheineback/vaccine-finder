import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import * as API from '../../App/fetch.js'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import  Button from '../../Utilities/Button/Button'
import { StyledBorderHeartIcon, StyledFilledHeartIcon } from './CliniqueStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

function Cliniques() {
  const { cliniques, county, setAppointmentData } = React.useContext(GlobalStateContext)
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [appointmentDataReady, setAppointmentDataReady] = useState(false)
  const [tempCliniqueContainer, setTempCliniqueContainer] = useState()
  const [multiSelect, setMultiSelect] = useState([])

  useEffect(() => {
    cityFunction()

    async function cityFunction () {
      if (cliniques.length > 0) {
        const cityArray = cliniques.map((clinique) => clinique.city)
        const filter = [...new Set(cityArray)].filter((city) => city.length > 0).sort()
      
    filter.map(async (city, index) => {
        const stationIds = cliniques
        .filter(
          (clinique) => clinique.booking_auto_search && (clinique.name.toLowerCase().includes(city.toLowerCase()) || clinique.city.toLowerCase().includes(city.toLowerCase()))
        )
        .map((clinique) => clinique.id)
      const data = stationIds.map(async (id) => {
        const response = await API.getAppointmentTypes(id)
        return { id, response }
      })
      const newData = await Promise.all(data)
      index === filter.length - 1 && setIsLoading(false)
      if (newData.length > 0) {
        if (newData[0].response.length > 0) {
          setTempCliniqueContainer(prev => prev ? [...prev, {city, data: newData}] : [{city, data: newData}])
          setCities(prev => [...prev, city])
        } else {
          setCities(prev => [...prev])
        }
      } else {
        setCities(prev => [...prev])
      }
      })

    }
  }
  
  }, [cliniques])



  async function handleCity({ target }) {
    const data = tempCliniqueContainer.filter(city => city.city.toLowerCase() === target.textContent.toLowerCase())
    if (multiSelect.includes(data[0].city)) {
      setMultiSelect(multiSelect.filter(city => city !== data[0].city))
      const tempRemoveIds = data.map(city => city.data[0].id)
      setAppointmentData(prev => [...prev]?.filter(id => tempRemoveIds.includes(id)))
    } else {
      setMultiSelect(prev => prev ? [...prev, data[0].city] : [data[0].city])
      const mapData = data.map(data => data.data)
      setAppointmentData(prev => prev ? [...prev, mapData] : [mapData])

    }
    
  }

  if (!county) return <Redirect to='./' />
  if (appointmentDataReady) return <Redirect to='./sok-metod'/>
  return isLoading ? (
    <Loader />
  ) : (
    <>
    <StyledBackArrow/>
    <List component='nav' aria-label='main mailbox folders'>
      {cities.map((city, index) => (
        <div key={index}>
          <ListItem button onClick={handleCity}>
            {multiSelect.includes(city) ? <StyledFilledHeartIcon/> : <StyledBorderHeartIcon/>}
            <ListItemText primary={city} />
          </ListItem>
          <Divider variant='inset' component='li' />
        </div>
      ))}
      <Button btnType='primary' onClick={() => {multiSelect.length > 0 && setAppointmentDataReady(true)}}>Sök lediga tider</Button>
    </List>
    </>
  )
}

export default Cliniques
