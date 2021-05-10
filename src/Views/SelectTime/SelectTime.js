import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Loader } from '../../Utilities/Loader/Loader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import * as API from '../../App/fetch'
import moment from 'moment'


function SelectTime() {
  const { appointmentData, searchStrategy } = React.useContext(GlobalStateContext)
  const [isLoading, setIsLoading] = useState(true)
  console.log(appointmentData)



  useEffect(() => {
    async function handleSearchNext() {
      const data = appointmentData.map(async (appointment) => {
        if (appointment.response.length > 0) {
          const response = await API.getAvailableTimes(appointment, moment().format("YYMMDD"), moment().add(30, 'days').format("YYMMDD"))
          return response
        }
      })
      const newData = await Promise.all(data)
      setIsLoading(false)
      console.log(newData)
    }

    searchStrategy === 'next' && handleSearchNext()

  },[searchStrategy, appointmentData])

  

  if (!appointmentData) return <Redirect to='./' />
  
  
  
  return (
    isLoading ? <Loader/>
    :
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemText primary='Välj din vaccinationsgrupp'/>
      </ListItem>
          <ListItem button>
            <ListItemText primary='TEST'/>
          </ListItem>
          <Divider variant='inset' component='li' />
    </List>
  )
}

export default SelectTime
