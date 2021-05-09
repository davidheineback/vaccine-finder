import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import GlobalState from '../GlobalState/GlobalState'
import Cliniques from '../Views/Cliniques/Cliniques'
import StartView from '../Views/StartView/StartView'
// import SearchView from '../components/SearchView/SearchView'
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
