import React from 'react'
// import Iframe from 'react-iframe'
import ArenguForm from 'components/UI/ArenguForm'
import { Paper, Container, Box, Typography, Divider, Tabs, Tab, Button } from '@material-ui/core'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'
import { HTMLyCSS } from 'config/templates'

export default function HTMLCSS() {
  const [tab, setTab] = React.useState(0)
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
              <MarkDown>{HTMLyCSS}</MarkDown>
              <Button color="primary" variant="contained" onClick={(e) => setTab(1)}>Estoy lista!</Button>
            </Box>
          </TabPanel>

          <TabPanel value={tab} index={1}>
            <Box textAlign="left" mb={2}>
              <Typography variant="h1" gutterBottom>
                Test de HTML y CSS
              </Typography>
              <Typography variant="h3" gutterBottom>
                Por favor responde a las siguientes preguntas sobre HTML y CSS
              </Typography>
            </Box>
            <Divider />
            <Box mt={4}>
              <ArenguForm id="158261947405655821" />
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  )
}
