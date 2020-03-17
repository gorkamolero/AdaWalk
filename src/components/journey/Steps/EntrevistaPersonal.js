import React from 'react'
import { Redirect } from 'react-router-dom'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import { InlineWidget } from 'react-calendly'
import { Box, Typography, Divider, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'
import { useConfig } from 'hooks'

var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
var timeOptions = { hour: '2-digit', minute: '2-digit' }

export default function EntrevistaPersonal() {
  const user = useFullUser()
  const globalState = useGlobalState()
  let { docs: { intros: docs } } = useConfig()
  const [tab, setTab] = React.useState(0)

  const hasInterviewDate = user.profile && user.profile.interviewDate
  const date = new Date(user.profile.interviewDate)

  if (hasInterviewDate) return (
    <Box pb={4} style={{ overflow: 'hidden' }}>
      <Box textAlign="center" mb={2} p={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          ¡Entrevista programada!
        </Typography>
        <Typography variant="h3" gutterBottom>
          El día {date.toLocaleDateString(navigator.language, dateOptions)}, a las { date.toLocaleTimeString(navigator.language, timeOptions) }
        </Typography>
      </Box>
    </Box>
  )
  return (
    <>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(ev, newTab) => setTab(newTab)}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Introducción" />
        <Tab label="Entrevista" />
      </Tabs>
      <Box pb={4} style={{ overflow: 'hidden' }}>
        <TabPanel value={tab} index={0}>
          <Box textAlign="left">
            <MarkDown>{docs['5-Entrevista']}</MarkDown>
            <Button
              color="primary"
              variant="contained"
              onClick={e => setTab(1)}
            >
              Elegir día y hora
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <InlineWidget url="https://calendly.com/adalab/entrevista-adalab" />
        </TabPanel>
      </Box>
    </>
  )
}
