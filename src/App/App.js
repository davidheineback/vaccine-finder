import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import GlobalState from '../GlobalState/GlobalState'
import Cliniques from '../Views/Cliniques/Cliniques'
import StartView from '../Views/StartView/StartView'
// import SearchView from '../Views/SearchView/SearchView'
import SelectTimeStrategy from '../Views/SelectTime/SelectTimeStrategy'
import SelectTime from '../Views/SelectTime/SelectTime'
import SelectAppointment from '../Views/SelectAppointment/SelectAppointment'
import AppContainer from '../Views/AppContainer/AppContainer'
import Wrapper from '../Components/Wrapper/Wrapper'

// REGION HALLAND // REGION VÄSTERNORRLAND // REGION KALMAR LÄN // REGION ÖSTERGÖTLAND

function App() {
  return (
    <GlobalState>
      <Router>
        <AppContainer>
          <Wrapper>
            <Switch>
              <Route path='/' exact  component={StartView} />
              {/* <Route path='/' exact  component={SearchView} /> */}
              <Route path='/mottagningar' exact component={Cliniques} />
              <Route path='/sok-metod' exact component={SelectTimeStrategy} />
              <Route path='/lediga-tider' exact component={SelectTime} />
              <Route path='/vaccinations-grupp' exact component={SelectAppointment} />
            </Switch>
          </Wrapper>
        </AppContainer>
      </Router>
    </GlobalState>
  )
}

export default App
