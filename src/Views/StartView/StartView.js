import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom'
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
  const [countyList] = useState(regions.filter(region => region.method === 'search'))
  const [otherCountys] = useState(regions.filter(region => region.method === 'redirect'))


  const handleClick = async (searchString) => {
    setCounty(searchString)
    await API.getCliniques(setCliniques, searchString) 
    setRedirect(true)
  }

  if (redirect) return <Redirect to='/mottagningar'/>
  return (
    <div >
      <List component="nav" aria-label="tillgängliga regioner">
        <ListItem style={{ textAlign: 'center' }}>
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
        <ListItemText secondary='Följande regioner hanteras tyvärr ännu inte av hittavaccintid.se. Välj region för att bli omdirigread till bokningsinformation på 1177 för just din region'/>
      </ListItem>
      </List>
      {otherCountys.map((item, index)=>(
          <div key={index}>
          <ListItem button component="a" href={item.redirect}>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText secondary={item.county}/>
        </ListItem>
        <Divider />
        </div>
        ))}
      <Link to='/om' style={{ textDecoration: 'none' }}>
        <ListItemText style={{ textTransform: 'uppercase', color: 'black' , marginTop: '15px'}}>Om hittavaccintid.se</ListItemText>
      </Link>
    </div>
  )
}

export default StartView







