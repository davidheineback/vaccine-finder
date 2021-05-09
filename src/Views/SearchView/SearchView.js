import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '../../Utilities/Button/Button'
import { StyledInput, StyledForm } from './SearchViewStyles'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { FormControl, InputLabel } from '@material-ui/core'

function SearchView() {
  const { setCounty, redirect, setRedirect } = React.useContext(
    GlobalStateContext
  )

  function handleCity({ target }) {
    setCounty(target.value)
  }

  function handleCityFilter() {
    setRedirect(true)
  }
  return (
    <>
      {redirect && <Redirect to='/cliniques' />}
      <StyledForm>
        <FormControl>
          <InputLabel htmlFor='my-input'>Skriv din region...</InputLabel>
          <StyledInput
            id='my-input'
            aria-describedby='my-helper-text'
            onChange={handleCity}
          />
        </FormControl>
        <Button onClick={handleCityFilter} btnType='primary'>
          Påbörja sök
        </Button>
      </StyledForm>
    </>
  )
}

export default SearchView
