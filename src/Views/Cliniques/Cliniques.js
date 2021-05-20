import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import * as API from '../../App/fetch.js'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

function Cliniques({ match }) {
  const { citySlug, setCitySlug, setCliniques, cliniques, county, setAppointmentData, setRedirect } = React.useContext(GlobalStateContext)
  const region = match?.params?.region || county
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [appointmentDataReady, setAppointmentDataReady] = useState(false)

  useEffect(() => {
    cityFunction()

    async function cityFunction () {
      if (cliniques.length > 0) {
        const cityArray = cliniques.map((clinique) => clinique.city)
        const filter = [...new Set(cityArray)].filter((city) => city.length > 0).sort()
        setCities(filter)
        setIsLoading(false)
      } else {
        await API.getCliniques(setCliniques, region)
        setIsLoading(false)
      }
    }
  
  }, [cliniques, setCliniques, region])


  async function handleCity({ target }) {
        const city = target.textContent.toLowerCase()
        setCitySlug(target.textContent.toLowerCase())
        const stationIds = cliniques
        .filter(
          (clinique) => clinique.booking_auto_search && (clinique.name.toLowerCase().includes(city) || clinique.city.toLowerCase().includes(city))
        )
        .map((clinique) => clinique.id)

        const data = stationIds.map(async (id) => {
              const response = await API.getAppointmentTypes(id)
              return { id, response }
            })
            
        const newData = await Promise.all(data)
        setAppointmentData(newData)
        setAppointmentDataReady(true)
  }

  if (!region) return <Redirect to='/' />
  if (appointmentDataReady) return <Redirect to={`/${region}/${citySlug}/sok-metod`}/>
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Link to='/' onClick={() => setRedirect(false)}>
      <StyledBackArrow/>
      </Link>
    <List component='nav' aria-label='main mailbox folders'>
      {cities.map((city, index) => (
        <div key={index}>
          <ListItem button onClick={handleCity}>
            <ListItemText primary={city} />
          </ListItem>
          <Divider variant='inset' component='li' />
        </div>
      ))}
    </List>
    </>
  )
}

export default Cliniques
