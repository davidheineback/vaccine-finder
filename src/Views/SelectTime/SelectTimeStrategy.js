import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Calendar from './Calendar'
import moment from 'moment'


function SelectTimeStrategy() {
  const { appointmentData, fromDate, setFromDate, setToDate } = React.useContext(GlobalStateContext)
  const [redirect, setRedirect] = useState(false)
  const [timeSelector, setTimeSelector] = useState(false)


  function handleCalendar () {
    setTimeSelector(true)
  }

  function handleFrom ({ target }) {
    const selectedDate = target.value.substring(2).replaceAll('-','')
    const currentDate = moment().format("YYMMDD")
    setFromDate(currentDate < selectedDate ? selectedDate : currentDate)
  }

  function handleTo ({ target }) {
    const selectedDate = target.value.substring(2).replaceAll('-','')
    setToDate(selectedDate > fromDate ? selectedDate : fromDate)
  }


  if (!appointmentData) return <Redirect to='./'/>
  if (redirect) return <Redirect to='/lediga-tider'/>
  return (
    <>
      <Link to='/mottagningar'>
      <StyledBackArrow/>
      </Link>
    <List component='nav' aria-label='main mailbox folders'>
      {!timeSelector ? 
        <>
        <ListItem button onClick={() => {setRedirect(true)}}>
          <ListItemText primary='Sök nästa lediga tid'/>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem button onClick={handleCalendar}>
            <ListItemText primary='Välj ett specifikt datum'/>
        </ListItem>
        </>
      :(
        <>
        <Calendar onChange={handleFrom} from/>
        <Calendar onChange={handleTo} to/>
        <ListItem button onClick={() => {setRedirect(true)}}>Sök mellan valda datum</ListItem>
        </>
      )}    
    </List>
  </>
  )
}

export default SelectTimeStrategy
