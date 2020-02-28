import React from 'react'
import { useParams, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SuperContainer, StepContainer } from 'components/UI/common'
import StepNav from './StepNav'
import Intro from './Steps/Intro'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'
import EntrevistaPersonal from './Steps/EntrevistaPersonal'

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1, y: 0 },
  out: { opacity: 0, scale: 1.1, y: '100vh' }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
}

const WrapInMotion = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0 2em',
        background: 'whitesmoke'
      }}
    >
      <StepContainer>{children}</StepContainer>
    </motion.div>
  )
}

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
          <Route path="/pasos/empecemos">
            <WrapInMotion>
              <Intro />
            </WrapInMotion>
          </Route>
          <Route path="/pasos/html-y-css">
            <WrapInMotion>
              <HTMLCSS />
            </WrapInMotion>
          </Route>
          <Route path="/pasos/javascript">
            <WrapInMotion>
              <JS />
            </WrapInMotion>
          </Route>
          <Route path="/pasos/entrevista">
            <WrapInMotion>
              <EntrevistaPersonal />
            </WrapInMotion>
          </Route>
        </Switch>
      </AnimatePresence>
    </SuperContainer>
  )
}
