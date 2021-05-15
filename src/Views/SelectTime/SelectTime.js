import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import * as API from '../../App/fetch'


function SelectTime() {
  const { appointmentData, searchStrategy, fromDate, toDate } = React.useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(true)
  const [availableTimes, setAvailableTime] = useState()

  useEffect(() => {
    async function handleSearchNext() {
      const data = appointmentData[0]?.map(async (appointment) => {
        const response = await appointment.map(async (id) => {
          if (id.response.length > 0) {
            const response = await API.getAvailableTimes(id, fromDate, toDate)
            return response
          }
        })
        const newData = await Promise.all(response)
        return newData
      })
      if (data){
      const newData = await Promise.all(data)
      setAvailableTime(newData[0].filter(filter => filter.length > 0))
      setIsLoading(false)}
    }

    handleSearchNext()

  },[searchStrategy, appointmentData, fromDate, toDate ])

  

  if (!appointmentData) return <Redirect to='./' />
  return (
    isLoading ? <Loader/>
    : availableTimes.length < 1 ?
    <>
    <StyledBackArrow/>
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemText primary='Vi kunde tyvärr inte hitta några lediga tider enligt angivna sökpreferenser'/>
      </ListItem>
          <Divider variant='inset' component='li' />
    </List>
    </>
    :
    <>
    <StyledBackArrow/>
    <List component='nav' aria-label='main mailbox folders'>
      {availableTimes?.map((time, index) => {
        return (
          <ListItem key={index + 'list'}>
            <ListItemText key={index} primary={time}/>
          </ListItem>
        )
      })}
        <Divider variant='inset' component='li' />
  </List>
  </>
  )
}

export default SelectTime
