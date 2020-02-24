import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Stage from './Stage'
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Container,
  Typography
} from '@material-ui/core'
import Connector from './Connector'
import StepIcon from './StepIcon'
import { Steps } from 'config'
import HTMLCSS from './Steps/HTMLCSS'

export default function StepNav({ step }) {
  const history = useHistory()

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
    <Box pt={4}>
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
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/pasos/${Steps[label]}`)}
            >
              <StepLabel StepIconComponent={StepIcon}>
                <Typography variant="h6">{label}</Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <Container>
        {activeStep === 0 && (
          <Box display="flex">
            <HTMLCSS />
          </Box>
        )}
      </Container>
    </Box>
  )
}
