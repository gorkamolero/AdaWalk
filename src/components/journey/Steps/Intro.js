import React from 'react'
import { Link } from 'react-router-dom'
import { useConfig } from 'hooks'
import { Box, Button } from '@material-ui/core'
import MarkDown from 'components/UI/MarkDown'
import { Steps } from 'config'

export default function Intro() {
  let { docs: { intros} } = useConfig()
  return (
    <Box p={4} textAlign="left">
      <MarkDown>{intros['1-intro']}</MarkDown>
      <Button
        component={Link}
        color="primary"
        variant="contained"
        to={Steps['HTML']}
      >
        ¡Comenzar!
      </Button>
    </Box>
  )
}
