import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Calendar from './Calendar'


function SelectTimeStrategy() {
  const { appointmentData, setSearchStrategy } = React.useContext(GlobalStateContext)
  const [redirect, setRedirect] = useState(false)
  const [timeSelector, setTimeSelector] = useState(false)

  function handleCalendar () {
    setTimeSelector(true)
  }

  function handleSearch () {
    // if datum är mindre än moment.fromnow()
  }

  if (!appointmentData) return <Redirect to='./'/>
  if (redirect) return <Redirect to='/lediga-tider'/>
  return (
    <List component='nav' aria-label='main mailbox folders'>
          {!timeSelector ? 
          <>
        <ListItem button onClick={() => {
                      setSearchStrategy('next')
                      setRedirect(true)
                     }}>
                        <ListItemText primary='Sök nästa lediga tid'/>
                      </ListItem>
                      <Divider variant='inset' component='li' />
             <ListItem button onClick={handleCalendar}>
             <ListItemText primary='Välj ett specifikt datum'/>
           </ListItem>
           </>
          :(
            <>
            <Calendar from/>
            <Calendar to/>
            <div onClick={handleSearch}>Sök mellan valda datum</div>
            </>
          )}
          
    </List>

  )
}

export default SelectTimeStrategy
