import React from 'react'
import { useConfig } from 'hooks'
import { Box, Typography } from '@material-ui/core'
import { SuperContainer, StepContainer } from 'components/UI/common'
import MarkdownEditor from 'components/admin/MarkdownEditor'

export default function Admin() {
  const config = useConfig()
  console.log(config)
  return (
    <SuperContainer>
      {Object.keys(config.docs).map(section => (
        <StepContainer key={section}>
          <Box p={2} maxWidth="xs" mb={2}>
            <Typography align="left" variant="body2" component="h2">
              {section.toUpperCase()}
            </Typography>
            <MarkdownEditor
              id={section}
              markdown={config.docs[section] ? config.docs[section] : '""'}
            />
          </Box>
        </StepContainer>
      ))}
    </SuperContainer>
  )
}
