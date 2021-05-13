import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Calendar({ from, onChange }) {
  const classes = useStyles();
  return (
    <form onChange={onChange} className={classes.container} noValidate>
      <TextField
        id="date"
        label={from ? 'från' : 'till'}
        type="date"
        defaultValue={moment().fromNow()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}

export default Calendar