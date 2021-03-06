import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import ArenguForm from 'components/UI/ArenguForm'
import { Box, Typography, Divider, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'
import { useConfig, useArenguHiddenFields } from 'hooks'

export default function JS() {
  const user = useFullUser()
  const globalState = useGlobalState()
  let { docs: { intros: docs } } = useConfig()
  const [tab, setTab] = React.useState(0)
  const hiddenFields = useArenguHiddenFields()
  
  if (user.profile.jsScore && user.profile.progress.toLowerCase() === 'proctoring') {
    return <Redirect to="/pasos/tests-ingles-psicometricos" />
  }

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
        <Tab label="Test" />
      </Tabs>

      <Box p={4}>
        <TabPanel value={tab} index={0}>
          <Box textAlign="left">
            <MarkDown>{docs['3-javascript']}</MarkDown>
            <Button
              color="primary"
              variant="contained"
              onClick={e => setTab(1)}
            >
              Comenzar
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Box mb={2}>
            <Typography variant="h1" gutterBottom>
              Test de JavaScript
            </Typography>
            <Typography variant="h3" gutterBottom>
              Por favor responde a las siguientes preguntas
            </Typography>
          </Box>
          <Divider />
          <Box mt={4}>
            <ArenguForm
              hiddenFields={hiddenFields}
              id={
                globalState.demoMode && user.isAdmin
                  ? '158463275783574161'
                  : '158262184424627629'
              }
            />
          </Box>
        </TabPanel>
      </Box>
    </>
  )
}
