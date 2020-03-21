import React, { useState } from 'react'
import { useParams, Switch, Route, useLocation } from 'react-router-dom'
import { useFullUser, useConfig } from 'hooks'
import { AnimatePresence } from 'framer-motion'
import { StepContainer } from 'components/UI/common'
import StepNav from './StepNav'
import Intro from './Steps/Intro'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'
import EntrevistaPersonal from './Steps/EntrevistaPersonal'

const AnimatedRoute = props => (
  <Route {...props}>
    <StepContainer position="absolute">{props.children}</StepContainer>
  </Route>
)

export default function Stepper() {
  let { step } = useParams()
  const location = useLocation()
  const user = useFullUser()
  console.log('Full user', user)

  const [status, setStatus] = useState(user.profile.status)

  return (
    <>
      <StepNav step={step} />
      <br />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <AnimatedRoute path="/pasos/empecemos">
            <Intro />
          </AnimatedRoute>
          <AnimatedRoute path="/pasos/html">
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
    </>
  )
}
