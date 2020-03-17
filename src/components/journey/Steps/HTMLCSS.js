import React from 'react'
import { Redirect } from 'react-router-dom'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import ArenguForm from 'components/UI/ArenguForm'
import { Box, Typography, Divider, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'
import { useConfig, useArenguHiddenFields } from 'hooks'

export default function HTMLCSS() {
  const user = useFullUser()
  const globalState = useGlobalState()
  let { docs: { intros: docs }, evaluacion: { tests } } = useConfig()
  const [tab, setTab] = React.useState(0)
  const hiddenFields = useArenguHiddenFields()

  if (user.profile.htmlScore) {
    return <Redirect to="/pasos/javascript" />
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
            <MarkDown>{docs['2-html-y-css']}</MarkDown>
            <Button
              color="primary"
              variant="contained"
              onClick={e => setTab(1)}
            >
              Estoy lista!
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Box textAlign="left" mb={2}>
            <Typography variant="h1" gutterBottom>
              HTML y CSS
            </Typography>
            <Typography variant="h3" gutterBottom>
              Por favor responde a las siguientes preguntas sobre HTML y CSS
            </Typography>
          </Box>
          <Divider />
          <Box mt={4}>
            <ArenguForm hiddenFields={hiddenFields} id={(globalState.demoMode && user.isAdmin) ? '158400475639718311' : '158261947405655821'} />
          </Box>
        </TabPanel>
      </Box>
    </>
  )
}
