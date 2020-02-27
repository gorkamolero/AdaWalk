import React from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import { SuperContainer } from 'components/UI/common'
import StepNav from './StepNav'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'

export default function Stepper() {
  let { step } = useParams()

  return (
    <SuperContainer>
      <StepNav step={step} />
      <br/>
      <Switch>
        <Route path='/pasos/html-y-css'>
          <HTMLCSS />
        </Route>
        <Route path='/pasos/javascript'>
          <JS />
        </Route>
      </Switch>
    </SuperContainer>
  )
}
