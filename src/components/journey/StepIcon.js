import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/styles'
import { LaunchIcon, HTMLIcon, JSIcon, ProctoringIcon, EntrevistaPersonalIcon, AdmisionIcon } from 'components/UI/CustomIcons'

const Icons = [ <LaunchIcon />, <HTMLIcon />, <JSIcon />, <ProctoringIcon />, <EntrevistaPersonalIcon />, <AdmisionIcon /> ]


const useStepIconStyles = makeStyles(theme => {
  return createStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: '1.5em',
      width: '1.5em',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc',
      zIndex: 1,
      borderRadius: '50%',
      padding: '.5em',
    },
    active: {
      backgroundImage:
        `linear-gradient(136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    },
    completed: {
      backgroundImage:
        `linear-gradient(136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },
  })
})

export default function StepIcon(props) {
  const classes = useStepIconStyles()
  const { active, completed } = props
  return (
    <div className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {Icons[props.icon - 1]}
    </div>
  )
}