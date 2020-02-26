import React, { useEffect } from 'react'
import microlight from 'microlight'
import ArenguForm from 'components/UI/ArenguForm'
import { Paper, Container, Box, Typography, Divider, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'
import { javascript } from 'config/templates'

export default function JS() {
  const [tab, setTab] = React.useState(0)

  useEffect(() => {
    setTimeout(() => microlight.reset('af-field-hint'), 2000)
  }, [])
  return (
    <Container maxWidth="sm">
      <Paper>
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
              <MarkDown>{javascript}</MarkDown>
              <Button
                color="primary"
                variant="contained"
                onClick={e => setTab(1)}
              >
                ¡Estoy lista!
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
              <ArenguForm id="158262184424627629" />
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  )
}
