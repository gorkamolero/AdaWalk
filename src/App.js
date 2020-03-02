import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { AuthCheck } from 'reactfire'
import { SnackbarProvider } from 'notistack'

import GlobalStyles from 'styles/GlobalStyles'
import 'App.css'
import AdaTheme from 'styles/Theming.js'
import { SuperContainer } from 'components/UI/common'
import AdaNav from 'components/UI/AdaNav'
import Login from 'components/auth/Login'
import Admin from 'components/Admin'
import News from 'components/news/News'
import Stepper from 'components/journey/Stepper'

function App() {
  return (
    <div className="App">
      <Router>
        <AdaTheme>
          <GlobalStyles />
          <News />
          <AuthCheck>
            <AdaNav />
          </AuthCheck>
          <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
            <SuperContainer>
              <Switch>
                <Route exact path="/">
                  <AuthCheck fallback={<Login />}>
                    <Redirect to="/pasos/empecemos" />
                  </AuthCheck>
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/pasos/:step">
                  <AuthCheck fallback={<Login />}>
                    <Stepper />
                  </AuthCheck>
                </Route>
              </Switch>
            </SuperContainer>
          </SnackbarProvider>
        </AdaTheme>
      </Router>
    </div>
  )
}

export default App