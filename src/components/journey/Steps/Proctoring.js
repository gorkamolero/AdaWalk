import React from 'react'
import { InlineWidget } from 'react-calendly'
import { Box } from '@material-ui/core'

export default function EntrevistaPersonal() {
  return (
    <>
      <Box pb={4} style={{ overflow: 'hidden' }}>
        <InlineWidget url="https://calendly.com/adalab/entrevista-adalab" />
      </Box>
    </>
  )
}
