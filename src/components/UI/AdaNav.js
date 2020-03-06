import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'reactfire'
// import { signOut } from 'backend/auth'
import { makeStyles } from '@material-ui/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { Settings, PowerSettingsNew as LogOut } from '@material-ui/icons'
import { useFullUser } from 'hooks'

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}))


const SuperNav = () => {
  const user = useFullUser()
  const history = useHistory()
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => setOpen(prevOpen => !prevOpen);
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const userActions = [
    {
      icon: <LogOut fontSize="inherit" />,
      name: 'Cerrar sesión',
      click: () => auth.signOut()
    }
  ]

  const adminActions = [
    {
      icon: <Settings fontSize="inherit" />,
      name: 'Admin',
      click: () => history.push('/admin')
    }
  ]

  const actions = user.isAdmin
    ? [...userActions, ...adminActions]
    : userActions

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      // hidden={hidden}
      icon={<SpeedDialIcon />}
      onBlur={handleClose}
      onClick={handleClick}
      onClose={handleClose}
      onFocus={handleOpen}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      open={open}
      direction="up"
    >
      {actions.map(({ name, icon, click }) => (
        <SpeedDialAction
          key={name}
          icon={icon}
          tooltipTitle={name}
          onClick={click}
        />
      ))}
    </SpeedDial>
  )
}

export default SuperNav