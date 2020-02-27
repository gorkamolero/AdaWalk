import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import Spinner from 'react-spinkit'
import Ada from 'components/journey/Ada'

const StyledSuperContainer = styled(Box)`
  background-color: whitesmoke;
  min-height: 100vh;
`

export const SuperContainer = (props) => {
  return (
    <StyledSuperContainer py={2}>
      {props.children}
    </StyledSuperContainer>
  )
}

export const AdaSpinner = () => {
  return (
    <Box
      display="flex"
      width="100%" height="100%"
      position="fixed"
      alignItems="center"
      justifyContent="center"
      style={{ top: 0, left: 0, right: 0, bottom: 0, background: 'white', zIndex: 99999 }}
    >

      <Spinner name="folding-cube" color="#14d9c4" style={{ transform: 'scale(4) rotage(45deg)' }} />
    </Box>
  )
}