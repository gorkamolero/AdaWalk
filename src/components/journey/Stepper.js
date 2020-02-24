import React from 'react'
import { Stepper, Step, StepLabel, Button, Box } from '@material-ui/core'
import Connector from './Connector'
import StepIcon from './StepIcon'
import { Steps } from 'config'
export default function AdaSteps() {
  // Stepper
  const [activeStep, setActiveStep] = React.useState(1)
  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
  const handleReset = () => setActiveStep(0)

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Stepper
        style={{ width: '100%' }}
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        {Steps.map((label, i) => {
          return (
            <Step key={label} style={{ cursor: 'pointer' }} onClick={() => setActiveStep(i)}>
              <StepLabel StepIconComponent={StepIcon}>
                {label}
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}
