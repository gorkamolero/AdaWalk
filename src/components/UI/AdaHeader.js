import React from 'react'
import { Avatar, Typography, Box } from '@material-ui/core'
import { Lock } from '@material-ui/icons'

const IndoHeader = ({ icon, title, children }) => {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {icon && (
        <Avatar>
          <Lock />
        </Avatar>
      )}

      <Typography component="h1" variant="h2">
        {title}
      </Typography>

      {children}
    </Box>
  )
}

export default IndoHeader
