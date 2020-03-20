import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import Stage from './Stage'
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography
} from '@material-ui/core'
import Connector from './Connector'
import StepIcon from './StepIcon'
import { Steps } from 'config'

export default function StepNav({ step }) {
  const history = useHistory()
  const user = useFullUser()
  const globalState = useGlobalState()

  // Stepper
  const [activeStep, setActiveStep] = useState(0)
  useEffect(
    () => setActiveStep(Object.values(Steps).findIndex(o => o === step)),
    [step]
  )

  // const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
  // const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
  // const handleReset = () => setActiveStep(0)

  return (
    <Box pt={4} style={{ position: 'relative' }}>
      <Stage
        pos={activeStep}
        totalMoves={Object.keys(Steps).length}
      />

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {Object.keys(Steps).map((label, i) => {
          return (
            <Step
              key={label}
              style={(globalState.demoMode && user.isAdmin) &&{ cursor: 'pointer' }}
              onClick={() => (globalState.demoMode && user.isAdmin) && history.push(`/pasos/${Steps[label]}`)}
            >
              <StepLabel StepIconComponent={StepIcon}>
                <Typography variant="h5">{label}</Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}
