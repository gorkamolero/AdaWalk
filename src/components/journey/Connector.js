import { withStyles } from '@material-ui/styles'
import { StepConnector } from '@material-ui/core'

const ColorlibConnector = withStyles(theme => ({
  alternativeLabel: {
    left: `calc(-50% + 1.75em)`,
    right: `calc(50% + 1.75em)`,
    top: '1.75em'
  },
  active: {
    '& $line': {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`
    }
  },
  completed: {
    '& $line': {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.primary.light} 0%,  ${theme.palette.primary.dark} 100%)`
    }
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
}))(StepConnector)

export default ColorlibConnector
