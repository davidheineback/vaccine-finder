import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import GlobalState from '../GlobalState/GlobalState'
import Cliniques from '../components/Cliniques/Cliniques'
import StartView from '../components/StartView/StartView'
// import SearchView from '../components/SearchView/SearchView'
import SelectAppointment from '../components/SelectAppointment/SelectAppointment'
import AppContainer from '../components/AppContainer/AppContainer'
import Wrapper from '../components/Wrapper/Wrapper'

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
              <Route path='/cliniques' exact component={Cliniques} />
              <Route path='/appointment' exact component={SelectAppointment} />
            </Switch>
          </Wrapper>
        </AppContainer>
      </Router>
    </GlobalState>
  )
}

export default App
