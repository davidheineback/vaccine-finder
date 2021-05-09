import React from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

function SelectAppointment() {
  const { appointmentData } = React.useContext(GlobalStateContext)
  console.log(appointmentData)

  if (!appointmentData) return <Redirect to='./' />
  return (
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemText primary='Välj din vaccinationsgrupp'/>
      </ListItem>
      {appointmentData[0].response.map((appointmentType, index)  => (
        <div key={index}>
          <ListItem button>
            <ListItemText primary={appointmentType.name
              .replace("1 pers Covid-19", '')
              .replace('2 pers Covid-19','2')
              .replace('(', '')
              .replace(')','')
              } />
          </ListItem>
          <Divider variant='inset' component='li' />
        </div>
      ))}
    </List>
  )
}

export default SelectAppointment
