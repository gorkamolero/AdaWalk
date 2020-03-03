import React from 'react'
import { useConfig } from 'hooks'
import { Box, Typography } from '@material-ui/core'
import { SuperContainer, StepContainer } from 'components/UI/common'
import MarkdownEditor from 'components/admin/MarkdownEditor'

export default function Admin() {
  const { docs: { intros } } = useConfig()
  return (
    <SuperContainer>
      {Object.keys(intros).map(section => (
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
    </SuperContainer>
  )
}
