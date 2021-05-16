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
import { regions } from './regions.js'

 

function StartView() {
  const { setCliniques, setCounty, redirect, setRedirect } = React.useContext(
    GlobalStateContext
  )

const countyList = regions.filter(region => region.method === 'search')
const otherCountys = regions.filter(region => region.method === 'redirect')  


  const handleClick = async (searchString) => {
    setCounty(searchString)
    await API.getCliniques(setCliniques, searchString) 
    setRedirect(true)
  }

  if (redirect) return <Redirect to='/mottagningar'/>
  return (
    <div >
      <List component="nav" aria-label="tillgängliga regioner">
        <ListItem>
          <ListItemText primary='Välj region för att söka efter ledig tid' />
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
      <ListItem>
        <ListItemText primary='Följande regioner hanteras tyvärr ännu inte av hittavaccintid.se. Välj region för att bli omdirigread till bokningsinformation på 1177 för just din region' />
      </ListItem>
      </List>
      {otherCountys.map((item, index)=>(
          <div key={index}>
          <ListItem button component="a" href={item.redirect}>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary={item.county}/>
        </ListItem>
        <Divider />
        </div>
        ))}
    </div>
  );
}

export default StartView







