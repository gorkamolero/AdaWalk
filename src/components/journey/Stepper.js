import React from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import { Paper, Container } from '@material-ui/core'
import { SuperContainer, StepContainer } from 'components/UI/common'
import StepNav from './StepNav'
import Intro from './Steps/Intro'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'
import EntrevistaPersonal from './Steps/EntrevistaPersonal'

export default function Stepper() {
  let { step } = useParams()

  return (
    <SuperContainer>
      <StepNav step={step} />
      <br />
      <Switch>
        <Route path="/pasos/empecemos">
          <StepContainer>
            <Intro />
          </StepContainer>
        </Route>
        <Route path="/pasos/html-y-css">
          <StepContainer>
            <HTMLCSS />
          </StepContainer>
        </Route>
        <Route path="/pasos/javascript">
          <StepContainer>
            <JS />
          </StepContainer>
        </Route>
        <Route path="/pasos/entrevista">
          <StepContainer>
            <EntrevistaPersonal />
          </StepContainer>
        </Route>
      </Switch>
    </SuperContainer>
  )
}
