import React from 'react'
import { Link } from 'react-router-dom'
import { useConfig } from 'hooks'
import { Box, Button } from '@material-ui/core'
import MarkDown from 'components/UI/MarkDown'
import { Steps } from 'config'

export default function Intro() {
  let { docs: { intros: { intro }} } = useConfig()
  return (
    <Box p={4} textAlign="left">
      <MarkDown>{intro}</MarkDown>
      <Button
        component={Link}
        color="primary"
        variant="contained"
        to={Steps['HTML y CSS']}
      >
        ¡Estoy lista!
      </Button>
    </Box>
  )
}
