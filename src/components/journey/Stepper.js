import React from 'react'
import { useParams, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SuperContainer, StepContainer } from 'components/UI/common'
import StepNav from './StepNav'
import Intro from './Steps/Intro'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'
import EntrevistaPersonal from './Steps/EntrevistaPersonal'

const AnimatedRoute = props => (
  <Route {...props}>
    <StepContainer>{props.children}</StepContainer>
  </Route>
)

export default function Stepper() {
  let { step } = useParams()
  const location = useLocation()
  console.log('YOLOCATION', location)

  return (
    <SuperContainer>
      <StepNav step={step} />
      <br />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <AnimatedRoute path="/pasos/empecemos">
            <Intro />
          </AnimatedRoute>
          <AnimatedRoute path="/pasos/html-y-css">
            <HTMLCSS />
          </AnimatedRoute>
          <AnimatedRoute path="/pasos/javascript">
            <JS />
          </AnimatedRoute>
          <AnimatedRoute path="/pasos/entrevista">
            <EntrevistaPersonal />
          </AnimatedRoute>
        </Switch>
      </AnimatePresence>
    </SuperContainer>
  )
}
