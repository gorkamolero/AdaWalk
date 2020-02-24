import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'
import 'App.css'
import AdaTheme from 'styles/Theming.js'
import Stepper from 'components/journey/Stepper'

function App() {
  return (
    <div className="App">
      <Router>
        <AdaTheme>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <Redirect to="/pasos/html-y-css" />
            </Route>
            <Route path="/pasos/:step">
              <Stepper />
            </Route>
          </Switch>
        </AdaTheme>
      </Router>
    </div>
  )
}

export default App