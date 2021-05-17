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
  const { appointmentData, fromDate, toDate } = React.useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(true)
  const [availableTimes, setAvailableTime] = useState()

  useEffect(() => {
    async function handleSearchNext() {
      const data = appointmentData?.map(async (appointment) => {
        console.log(appointment)
        const response  = await API.getAvailableTimes(appointment, fromDate, toDate)
        const newData = await Promise.all(response)
        return {id: appointment.id, slots: newData}
      })
      if (data){
      const newData = await Promise.all(data)
      // newData[0].slots = newData[0].slots.filter(date => date.slots.length > 0)
      const arr = newData.map((clinique) => {
        console.log(clinique)
        const available = clinique.slots.map(date => {
          const filter = date.slots.filter(slot => slot.available)
          console.log(filter)
          return filter.length > 0 && filter
        })
        const newArr = available.filter(truthy => truthy !== false)
        clinique.slots = newArr
        return clinique
      })
      console.log(arr)
      setAvailableTime(prev => prev ? [...prev, arr] : [arr])
      
      setIsLoading(false)}
    }

    handleSearchNext()

  },[appointmentData, fromDate, toDate ])

  

  if (!appointmentData) return <Redirect to='./' />
  return (
    console.log(availableTimes) &&
    isLoading ? <Loader/>
    : availableTimes?.[0].length < 1 ?
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
    {console.log(availableTimes)}
    {/* <List component='nav' aria-label='main mailbox folders'>
      {availableTimes?.map((time, index) => {
        return (
          <ListItem key={index + 'list'}>
            <ListItemText key={index} primary={time}/>
          </ListItem>
        )
      })}
        <Divider variant='inset' component='li' />
  </List> */}
  </>
  )
}

export default SelectTime
