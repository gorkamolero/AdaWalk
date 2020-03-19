import React from 'react'
import { Redirect } from 'react-router-dom'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import { Box, Typography, Button, Link } from '@material-ui/core'
import MarkDown from 'components/UI/MarkDown'
import { useConfig } from 'hooks'

var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
var timeOptions = { hour: '2-digit', minute: '2-digit' }

export default function EntrevistaPersonal() {
  const user = useFullUser()
  const globalState = useGlobalState()
  let {
    docs: { intros: docs }
  } = useConfig()
  const [tab, setTab] = React.useState(0)

  const hasInterviewDate = user.profile && user.profile.interviewDate
  const date = new Date(user.profile.interviewDate)
  
  if (hasInterviewDate)
    return (
      <Box pb={4} style={{ overflow: 'hidden' }}>
        <Box textAlign="center" mb={2} p={4}>
          <Typography variant="h2" component="h1" gutterBottom>
            ¡Entrevista programada!
          </Typography>
          <Typography variant="h3" gutterBottom>
            El día {date.toLocaleDateString(navigator.language, dateOptions)}, a
            las {date.toLocaleTimeString(navigator.language, timeOptions)}
          </Typography>
        </Box>
      </Box>
    )
  return (
    <Box p={4} style={{ overflow: 'hidden' }} textAlign="left">
      <MarkDown>{docs['5-Entrevista']}</MarkDown>
      <Button
        component="a"
        target="_blank"
        color="primary"
        variant="contained"
        href={`https://calendly.com/adalab/entrevista-adalab/\?email=${encodeURIComponent(
          user.email
        )}&first_name=gorka&lastName=${user.profile.firstName}&last_name=${
          user.profile.lastName
        }`}
      >
        Elegir día y hora
      </Button>
    </Box>
  )
}
