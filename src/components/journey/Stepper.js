import React from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import StepNav from './StepNav'
import HTMLCSS from './Steps/HTMLCSS'
import JS from './Steps/JS'

export default function Stepper() {
  let { step } = useParams()

  return (
    <>
      <StepNav step={step} />

      <Switch>
        <Route path='/pasos/html-y-css'>
          <HTMLCSS />
        </Route>
        <Route path='/pasos/javascript'>
          <JS />
        </Route>
      </Switch>
    </>
  )
}
