import React from 'react'
import { useParams, Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { useFullUser, useStepper } from 'hooks'
import AdaWin from 'components/UI/AdaWin'
import { AnimatePresence } from 'framer-motion'
import { StepContainer } from 'components/UI/common'
import StepBlocker from './StepBlocker'
import StepNav from './StepNav'
import Intro from './Steps/Intro'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'
import EntrevistaPersonal from './Steps/EntrevistaPersonal'
import Proctoring from './Steps/Proctoring'

const AnimatedRoute = props => (
  <Route {...props}>
    <StepContainer position="absolute">{props.children}</StepContainer>
  </Route>
)

export default function Stepper() {
  let { step } = useParams()
  const location = useLocation()
  const user = useFullUser()
  const stepper = useStepper()
  console.log('Full user', user)

  React.useEffect(() => {
    console.log('DEVUELVE', stepper)
  }, [stepper])

  // Render
  if (user.profile && user.profile.status && !user.profile.status.includes('OK')) return (
    <StepBlocker status={user.profile.status} />
  )

  if (user.profile && user.profile.admission) return (
    <StepBlocker status={user.profile.admission} />
  )

  return (
    <>
      <StepNav step={step} />
      <br />
      {user.isAdmin || <Redirect to={stepper} />}

      
      {user.profile.win && <AdaWin win={user.profile.win} />}
      
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
          <AnimatedRoute path="/pasos/tests-presenciales">
            <Proctoring />
          </AnimatedRoute>
          <AnimatedRoute path="/pasos/entrevista">
            <EntrevistaPersonal />
          </AnimatedRoute>
        </Switch>
      </AnimatePresence>
    </>
  )
}
