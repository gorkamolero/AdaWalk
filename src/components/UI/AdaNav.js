import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'reactfire'
// import { signOut } from 'backend/auth'
import { makeStyles } from '@material-ui/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { Settings, PowerSettingsNew as LogOut } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}))


const SuperNav = () => {
  const history = useHistory()
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const signOut = () => auth.signOut()

  const actions = [
    // { icon: <Cal fontSize="inherit" />, name: 'Calendario', click: () => setLocation('/calendario') },
    { icon: <Settings fontSize="inherit" />, name: 'Perfil', click: () => history.push('/admin') },
    { icon: <LogOut fontSize="inherit" />, name: 'Cerrar sesión', click: () => signOut() }
  ]


  const handleClick = () => setOpen(prevOpen => !prevOpen);
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

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
