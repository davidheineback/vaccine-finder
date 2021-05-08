import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from '../../Utilities/Button/Button'
import { StyledInput } from './SearchViewStyles'
import { GlobalStateContext } from '../../GlobalState/GlobalState'


function SearchView() {
const { setCounty, redirect, setRedirect } = React.useContext(GlobalStateContext)


function handleCity ({ target }) {
  setCounty(target.value)
}

function handleCityFilter () {
  setRedirect(true)
}
  return (
    <>
    <StyledInput onChange={handleCity} placeholder='Skriv din region...'/>
    <Button onClick={handleCityFilter} btnType="primary">Påbörja sök</Button>
    {redirect && <Redirect to="/cliniques"/>}
    </>
  )
}

export default SearchView
