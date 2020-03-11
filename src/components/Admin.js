import React from 'react'
import { useConfig } from 'hooks'
import { Box, Typography, Tabs, Tab } from '@material-ui/core'
import { SuperContainer, StepContainer } from 'components/UI/common'
import TabPanel from 'components/UI/TabPanel'
import OtherConfig from 'components/admin/OtherConfig'
import MarkdownEditor from 'components/admin/MarkdownEditor'

const getBefore = (str) => str.substr(0, str.indexOf('-'))

export default function Admin() {
  const { docs: { intros, status } } = useConfig()
  const [tab, setTab] = React.useState(0)

  
  const OrderedIntros = Object.keys(intros).sort((a, b) => getBefore(a) - getBefore(b))
  const OrderedBlocks = Object.keys(status).sort((a, b) => getBefore(a) - getBefore(b))

  return (
    <SuperContainer>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(ev, newTab) => setTab(newTab)}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Introducciones" />
        <Tab label="Bloqueo" />
        <Tab label="Otros" />
      </Tabs>

      <TabPanel value={tab} index={0}>
        {OrderedIntros.map(section => (
          <StepContainer key={section}>
            <Box p={2} maxWidth="xs" mb={2}>
              <Typography align="left" variant="body2" component="h2">
                {section.toUpperCase()}
              </Typography>
              <MarkdownEditor
                collection="intros"
                id={section}
                markdown={intros[section] ? intros[section] : '""'}
              />
            </Box>
          </StepContainer>
        ))}
      </TabPanel>

      <TabPanel value={tab} index={1}>
        {OrderedBlocks.map(section => (
          <StepContainer key={section}>
            <Box p={2} maxWidth="xs" mb={2}>
              <Typography align="left" variant="body2" component="h2">
                {section.toUpperCase()}
              </Typography>
              <MarkdownEditor
                collection="status"
                id={section}
                markdown={status[section] ? status[section] : '""'}
              />
            </Box>
          </StepContainer>
        ))}
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <OtherConfig />
      </TabPanel>

    </SuperContainer>
  )
}
