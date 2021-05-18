import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import * as API from '../../App/fetch'


function SelectTime() {
  const { cliniques, appointmentData, fromDate, toDate } = React.useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(true)
  const [availableTimes, setAvailableTime] = useState([])

  useEffect(() => {
    async function handleSearchNext() {
      const data = appointmentData?.map(async (appointment) => {
        const response  = await API.getAvailableTimes(appointment, fromDate, toDate)
        const newData = await Promise.all(response)
        return {id: appointment.id, slots: newData}
      })
      if (data){
      const newData = await Promise.all(data)
      const arr = newData.map((clinique, index) => {
        const available = clinique.slots.map(date => {
          const filter = date.slots.filter(slot => slot.available)
          return filter.length > 0 && {date: date.date, slots: filter}
        })
        const newArr = available.filter(truthy => truthy !== false)
        clinique.slots = newArr
        return clinique
      })
      
      arr.forEach(id => {
        if (id.slots.length > 0) {
          setAvailableTime(prev => prev ? [...prev, id] : [id])
        }
      })
      setIsLoading(false)}
    }

    handleSearchNext()

  },[appointmentData, fromDate, toDate ])


  if (!appointmentData) return <Redirect to='./' />
  return (
    isLoading ? <Loader/>
    : availableTimes?.length < 1 ?
    <>
    <Link to='/sok-metod'>
      <StyledBackArrow/>
    </Link>
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemText primary='Vi kunde tyvärr inte hitta några lediga tider enligt angivna sökpreferenser'/>
      </ListItem>
          <Divider variant='inset' component='li' />
    </List>
    </>
    :
    <>
    <Link to='/sok-metod'>
      <StyledBackArrow/>
    </Link>
    {availableTimes.map((clinique, index) => { 
      const id = clinique.id
      const name = cliniques.filter((clinique) => clinique.id === id)
      return (
        clinique.slots.map(slot => {
          const date = `20${slot.date.substring(0, 2)}-${slot.date.substring(2,4)}-${slot.date.substring(4)}`
            return(
            index === 0 ?
            <>
            <ListItem key={index + 'list'}>
              <ListItemText key={index} primary={name[0].name}/>
            </ListItem>
            <ListItem key={index + 'headerplaceholder'}>
            <ListItemText key={index + 'datumplaceholder'} primary='Datum:'/>
            <ListItemText key={index + 'numberofTimes'} primary='Antal lediga tider'/>
            </ListItem>
            <ListItem component="a" href={`https://bokning.mittvaccin.se/klinik/${id}/bokning`} target='_blank' key={index + 'item'}>
            <ListItemText key={index + 'datumplaceholder'} primary={date}/>
            <ListItemText key={index + 'times'} primary={slot.slots.length}/>
            </ListItem>
            </>
            :
            <>
            <ListItem key={index + 'item'}>
              <ListItemText key={index + 'date'} primary={date}/>
              <ListItemText key={index + 'times'} primary={slot.slots.length}/>
              <ListItemText key={index + 'times'} primary='Till bokning'/>
            </ListItem>
           </>
            )
              })
              )
    })}
  </>
  )
}

export default SelectTime
