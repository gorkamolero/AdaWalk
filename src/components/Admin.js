import React from 'react'
import { useConfig } from 'hooks'
import { Box, Typography, Tabs, Tab } from '@material-ui/core'
import { SuperContainer, StepContainer } from 'components/UI/common'
import TabPanel from 'components/UI/TabPanel'
import OtherConfig from 'components/admin/OtherConfig'
import MarkdownEditor from 'components/admin/MarkdownEditor'

const getBefore = (str) => str.substr(0, str.indexOf('-'))

export default function Admin() {
  const { docs: { intros } } = useConfig()
  const [tab, setTab] = React.useState(0)

  
  const OrderedSection = Object.keys(intros).sort((a, b) => getBefore(a) - getBefore(b))

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
        <Tab label="Textos" />
        <Tab label="Otros" />
      </Tabs>

      <TabPanel value={tab} index={0}>
        {OrderedSection.map(section => (
          <StepContainer key={section}>
            <Box p={2} maxWidth="xs" mb={2}>
              <Typography align="left" variant="body2" component="h2">
                {section.toUpperCase()}
              </Typography>
              <MarkdownEditor
                id={section}
                markdown={intros[section] ? intros[section] : '""'}
              />
            </Box>
          </StepContainer>
        ))}
      </TabPanel>

      <TabPanel value={tab} index={1}>
        <OtherConfig />
      </TabPanel>

    </SuperContainer>
  )
}
