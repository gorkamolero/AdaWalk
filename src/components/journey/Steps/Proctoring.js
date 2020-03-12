import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useConfig } from 'hooks'
import MarkDown from 'components/UI/MarkDown'

export default function Proctoring() {
  let { docs: { intros: docs } } = useConfig()
  return (
    <Box p={4} textAlign="left">
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
    </Box>
  )
}
