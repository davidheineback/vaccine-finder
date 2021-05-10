import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import * as API from '../../App/fetch'


function SelectTime() {
  const { appointmentData, searchStrategy } = React.useContext(GlobalStateContext)
  console.log(appointmentData)

  useEffect(() => {
    searchStrategy === 'next' &&
    API.getAvailableTimes(appointmentData[0], '210510', '210610')
  },[searchStrategy, appointmentData])


  if (!appointmentData) return <Redirect to='./' />
  return (
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
