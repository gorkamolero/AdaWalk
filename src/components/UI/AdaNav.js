import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'reactfire'
// import { signOut } from 'backend/auth'
import { makeStyles } from '@material-ui/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import { Settings, PowerSettingsNew as LogOut, Visibility, VisibilityOff } from '@material-ui/icons'
import { AdaIcon } from 'components/UI/CustomIcons'
import { useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'

const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  ada: {
    fontSize: '120%'
  }
}))


const SuperNav = () => {
  const user = useFullUser()
  const history = useHistory()
  const auth = useAuth()
  const globalState = useGlobalState()

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
    },
    {
      icon: <AdaIcon className={classes.ada} />,
      name: 'Journey',
      click: () => history.push('/')
    },
    {
      icon: globalState.demoMode ? <VisibilityOff fontSize="inherit" /> : <Visibility fontSize="inherit" />,
      name: globalState.demoMode ? 'Terminar modo demo' : 'Iniciar modo demo',
      click: () => globalState.setDemoMode({ demoMode: !globalState.demoMode })
    },
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
