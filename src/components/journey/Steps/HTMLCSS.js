import React from 'react'
// import Iframe from 'react-iframe'
import ArenguForm from 'components/UI/ArenguForm'
import { Paper, Container, Box, Typography, Divider } from '@material-ui/core'

export default function HTMLCSS() {
  return (
    <Container maxWidth="sm">
      <Paper>
        <Box p={4} mt={4}>
          <Box mb={2}>
            <Typography variant="h1" gutterBottom>Test de HTML y CSS</Typography>
            <Typography variant="h3" gutterBottom>Por favor responde a las siguientes preguntas sobre HTML</Typography>
          </Box>
          <Divider />
          <Box mt={4}>
            <ArenguForm id="158261947405655821"/>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
