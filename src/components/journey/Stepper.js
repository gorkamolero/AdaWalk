import React from 'react'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import StepNav from './StepNav'
import HTMLCSS from './Steps/HTMLCSS'

export default function Stepper() {
  let match = useRouteMatch()
  let { step } = useParams()

  return (
    <>
      <StepNav step={step} />

      <Switch>
        <Route path='/pasos/html-y-css'>
          <HTMLCSS />
        </Route>
      </Switch>
    </>
  )
}
