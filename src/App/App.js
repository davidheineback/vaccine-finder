import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { StyledAppContainer, StyledWrapper } from './StyledApp'
import GlobalState from '../GlobalState/GlobalState'
import Cliniques from '../components/Cliniques/Cliniques'
import SearchView from '../components/SearchView/SearchView'

function App() {
  return (
  <GlobalState>
    <Router>
    <StyledAppContainer>
    <StyledWrapper>
      <Switch>
      <Route exact path='/' component={SearchView}/>
            <Route path='/cliniques' exact component={Cliniques}/>
      </Switch>
    </StyledWrapper>
    </StyledAppContainer>
    </Router>
  </GlobalState>
  )
}

export default App
