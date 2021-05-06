// main App component

import React, { useState } from 'react'
import Cliniques from '../components/Cliniques/Cliniques'
import Button from '../Utilities/Button/Button'
import { StyledAppContainer, StyledInput, StyledWrapper } from './StyledApp'


function App() {
  const [county, setCounty] = useState('')
  const [renderState, setRenderState] = useState(1)

  function handleCity ({ target }) {
    setCounty(target.value)
  }

  function handleCityFilter () {
    setRenderState(2)
  }

  return (
    <StyledAppContainer>
    <StyledWrapper>
    {renderState === 1 &&
    <>
      <StyledInput onChange={handleCity} placeholder='Skriv din region...'/>
      <Button onClick={handleCityFilter} btnType="primary">Påbörja sök</Button>
    </>
    }
    {renderState === 2 &&
      <Cliniques county={county}/>
    }
    </StyledWrapper>
    </StyledAppContainer>
  )
}

export default App
