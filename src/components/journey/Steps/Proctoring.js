import React from 'react'
import { Box, Button, Tabs, Tab } from '@material-ui/core'
import { useConfig } from 'hooks'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'

export default function Proctoring() {
  let { docs: { intros: docs } } = useConfig()
  const [tab, setTab] = React.useState(0)
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
        <Tab label="He terminado" />
      </Tabs>
      <Box p={4} textAlign="left">
        <TabPanel value={tab} index={0}>
          <MarkDown>{docs['4-Proctoring']}</MarkDown>
          <Button
            color="primary"
            variant="contained"
            component="a"
            href="https://proctoring.com"
            target="_blank"
          >
            ¡Estoy lista!
          </Button>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <MarkDown>{docs['4.5-Proctoring-terminado']}</MarkDown>
          <Button
            color="primary"
            variant="contained"
            component="a"
            href="https://proctoring.com"
            target="_blank"
          >
            He terminado
          </Button>
        </TabPanel>
      </Box>
    </>
  )
}
