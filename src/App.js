import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ScrollToTop } from 'helpers'
import { AuthCheck } from 'reactfire'
import { GlobalStateProvider } from 'hooks/useGlobalState'
import { SnackbarProvider } from 'notistack'
import { ConfirmProvider } from 'material-ui-confirm'

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
      <GlobalStateProvider>
        <Router>
          <ScrollToTop />
          <AdaTheme>
            <GlobalStyles />
            <AuthCheck>
              <News />
              <AdaNav />
            </AuthCheck>
            <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
              <ConfirmProvider>
                <AuthCheck fallback={<Login />}>
                  <SuperContainer>
                    <Switch>
                      <Route path="/admin">
                        <Admin />
                      </Route>

                      <Route exact path="/">
                        <Stepper />
                      </Route>

                      <Route path="/pasos/:step">
                        <Stepper />
                      </Route>
                    </Switch>
                  </SuperContainer>
                </AuthCheck>
              </ConfirmProvider>
            </SnackbarProvider>
          </AdaTheme>
        </Router>
      </GlobalStateProvider>
    </div>
  )
}

export default App
