import React from 'react'
import GlobalStyles from 'styles/GlobalStyles'
import 'App.css'
import AdaTheme from 'styles/Theming.js'
import Stepper from 'components/journey/Stepper'
// import Stage from 'components/journey/Stage'

function App() {
  return (
    <div className="App">
      <AdaTheme>
        <GlobalStyles />
        <Stepper />
      </AdaTheme>
    </div>
  )
}

export default App