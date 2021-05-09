import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// REGION HALLAND // REGION VÄSTERNORRLAND // REGION KALMAR LÄN // REGION ÖSTERGÖTLAND

function StartView() {

  const county = [{county: 'Region Halland', search: 'halland'},{county: 'Region Västernorrland', search: 'vasternorrland'},{county: 'Region Kalmar', search: 'kalmar'},{county: 'Region Östergötland', search: 'ostergotland'}]
  const handleClick=(searchString)=>{
    console.log(searchString)
  }

  return (
    <div >
      <List component="nav" aria-label="tillgängliga regioner">
        <ListItem>
          <ListItemText primary='Regioner från MittVaccin.se' />
        </ListItem>
        {county.map((item, index)=>(
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







