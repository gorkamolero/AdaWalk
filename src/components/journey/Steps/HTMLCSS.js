import React from 'react'
// import Iframe from 'react-iframe'
import { Paper, Container, Box, Typography, Divider } from '@material-ui/core'

export default function HTMLCSS() {
  return (
    <Container maxWidth="sm">
      <Paper>
        {/* <Iframe
          url="https://docs.google.com/forms/d/e/1FAIpQLSfKdzqbikMYxp_9cYbqlK8LUbSj5zpVbSw8PM53Q0MnXs6TFg/viewform?embedded=true"
          width="100%"
          height="3343"
          id="GForms"
          // className="myClassname"
          display="initial"
          position="relative"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        /> */}
        <Box p={4} mt={4}>
          <Box mb={2}>
            <Typography variant="h1" gutterBottom>Test de HTML y CSS</Typography>
            <Typography variant="h3" gutterBottom>Por favor responde a las siguientes preguntas sobre HTML</Typography>
          </Box>
          <Divider />
          <Box mt={4}>
            <div data-arengu-form-id="158261947405655821"></div>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
