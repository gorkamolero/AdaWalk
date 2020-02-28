import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Box, Container, Paper } from '@material-ui/core'
import Spinner from 'react-spinkit'
// import Ada from 'components/journey/Ada'

const StyledSuperContainer = styled.main`
  background-color: whitesmoke;
  min-height: 100vh;
  box-shadow: inset 0px 10px 12px 0px rgba(0, 0, 0, 0.1);
  position: relative;
`

export const SuperContainer = props => {
  return <StyledSuperContainer py={2}>{props.children}</StyledSuperContainer>
}
const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1, y: 0 },
  out: { opacity: 0, scale: 1.1, y: '100vh' }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
}

export const StepContainer = props => (
  <Box
    component={motion.div}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    display="flex"
    justifyContent="center"
    pb={2}
    width="100%"
    style={{
      background: 'whitesmoke',
      position: 'absolute'
    }}
  >
    <Container maxWidth="sm">
      <Paper elevation={2}>{props.children}</Paper>
    </Container>
  </Box>
)

export const AdaSpinner = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      position="fixed"
      alignItems="center"
      justifyContent="center"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        zIndex: 99999
      }}
    >
      <Spinner
        name="folding-cube"
        color="#14d9c4"
        style={{ transform: 'scale(4) rotage(45deg)' }}
      />
    </Box>
  )
}
