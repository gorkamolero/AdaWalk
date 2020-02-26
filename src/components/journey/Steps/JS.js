import React, { useEffect } from 'react'
import microlight from 'microlight'
import ArenguForm from 'components/UI/ArenguForm'
import { Paper, Container, Box, Typography, Divider } from '@material-ui/core'

export default function JS() {
  useEffect(() => {
    setTimeout(() => microlight.reset('af-field-hint'), 2000)
  }, [])
  return (
    <Container maxWidth="sm">
      <Paper>
        <Box p={4} mt={4}>
          <Box mb={2}>
            <Typography variant="h1" gutterBottom>Test de JavaScript</Typography>
            <Typography variant="h3" gutterBottom>Por favor responde a las siguientes preguntas sobre HTML</Typography>
          </Box>
          <Divider />
          <Box mt={4}>
            <ArenguForm id="158262184424627629"/>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
