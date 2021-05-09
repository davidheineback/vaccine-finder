import React from 'react';
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import * as API from '../../App/fetch';
import { GlobalStateContext } from '../../GlobalState/GlobalState'

// REGION HALLAND // REGION VÄSTERNORRLAND // REGION KALMAR LÄN // REGION ÖSTERGÖTLAND

function StartView() {
  const { cliniques, setCliniques, setCounty, redirect, setRedirect } = React.useContext(
    GlobalStateContext
  )

  const countyList = [{county: 'Region Halland', search: 'halland'},{county: 'Region Västernorrland', search: 'vasternorrland'},{county: 'Region Kalmar', search: 'kalmar'},{county: 'Region Östergötland', search: 'ostergotland'}]

  const handleClick = async (searchString) => {
    setCounty(searchString)
    await API.getCliniques(setCliniques, searchString) 
    console.log(cliniques)
    setRedirect(true)
  }
  
  if (redirect) return <Redirect to='/cliniques'/>
  return (
    <div >
      <List component="nav" aria-label="tillgängliga regioner">
        <ListItem>
          <ListItemText primary='Regioner från MittVaccin.se' />
        </ListItem>
        {countyList.map((item, index)=>(
          <div key={index}>
          <ListItem button>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary={item.county} onClick={()=>handleClick(item.search)}/>
        </ListItem>
        <Divider />
        </div>
        ))}
      </List>
    </div>
  );
}

export default StartView







