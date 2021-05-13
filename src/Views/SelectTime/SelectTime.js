import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import * as API from '../../App/fetch'


function SelectTime() {
  const { appointmentData, searchStrategy, fromDate, toDate } = React.useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(true)
  const [availableTimes, setAvailableTime] = useState()
  console.log(appointmentData)



  useEffect(() => {
    async function handleSearchNext() {
      const data = appointmentData.map(async (appointment) => {
        if (appointment.response.length > 0) {
          const response = await API.getAvailableTimes(appointment, fromDate, toDate)
          return response
        }
      })
      const newData = await Promise.all(data)
      setAvailableTime(newData.filter(filter => filter.length > 0))
      console.log(newData)
      setIsLoading(false)
    }

    handleSearchNext()

  },[searchStrategy, appointmentData, fromDate, toDate ])

  

  if (!appointmentData) return <Redirect to='./' />
  return (
    isLoading ? <Loader/>
    : availableTimes.length < 1 ?
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemText primary='Vi kunde tyvärr inte hitta några lediga tider enligt angivna sökpreferenser'/>
      </ListItem>
          <Divider variant='inset' component='li' />
    </List>
    :
    <List component='nav' aria-label='main mailbox folders'>
      {availableTimes.map((time, index) => {
        return (
          <ListItem key={index + 'list'}>
            <ListItemText key={index} primary={time}/>
          </ListItem>
        )
      })}
        <Divider variant='inset' component='li' />
  </List>
  )
}

export default SelectTime
