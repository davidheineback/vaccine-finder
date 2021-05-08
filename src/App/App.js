import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { StyledAppContainer, StyledWrapper } from './StyledApp'
import GlobalState from '../GlobalState/GlobalState'
import Cliniques from '../components/Cliniques/Cliniques'
import SearchView from '../components/SearchView/SearchView'
import SelectAppointment from '../components/SelectAppointment/SelectAppointment'

function App() {
  return (
    <GlobalState>
      <Router>
        <StyledAppContainer>
          <StyledWrapper>
            <Switch>
              <Route path='/' exact  component={SearchView} />
              <Route path='/cliniques' exact component={Cliniques} />
              <Route path='/appointment' exact component={SelectAppointment} />
            </Switch>
          </StyledWrapper>
        </StyledAppContainer>
      </Router>
    </GlobalState>
  )
}

export default App
