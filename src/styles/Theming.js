import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const AdaTheme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#14d9c4',
      light: '#6cffef',
      dark: '#099d8d'
      // contrastText: "#fff"
    },
    secondary: {
      main: '#E88235'
      // light: "#ffd3a9",
      // dark: "#c9724d",
      // contrastText: "#fff"
    },
    background: {
      default: '#f8ffff'
    }
  },
  common: {
    border: '1px solid'
  },
  typography: {
    fontFamily: '"Product Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    body2: {
      fontSize: '.8rem'
    },
    h1: {
      fontSize: '2.618rem'
    },
    h2: {
      fontSize: '2rem',
      fontFamily: '"Product Sans", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontSize: '1.2rem'
    },
    h4: {
      fontSize: '1rem'
    },
    h5: {
      fontFamily: '"Bangers", "Product Sans", "Helvetica", "Arial", sans-serif',
      fontSize: '1.2rem',
      fontWeight: 'lighter',
      color: '#099d8d',
      letterSpacing: '.025em'
    },
    button: {
      letterSpacing: '0.04em'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': '"Product Sans", "Helvetica", "Arial", sans-serif'
      }
    },
    MuiButton: {
      containedPrimary: {
        color: 'white'
      }
    },
    MuiCardContent: {
      root: {
        // Some CSS
        padding: 0,
        '&:last-child': {
          paddingBottom: 0
        }
      }
    },
    MuiDialog: {
      paperScrollPaper: { overflow: 'visible' }
    },
    MuiDialogContent: {
      root: { overflow: 'visible !important' }
    },
    MuiSpeedDial: {
      fab: {
        color: 'white'
      }
    },
    MuiSpeedDialIcon: {
      root: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    MuiStepper: {
      root: {
        background: 'transparent'
      }
    },
    MuiStepLabel: {
      alternativeLabel: {
        marginTop: '4px !important'
      }
    },
    MuiLinearProgress: {
      root: {
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }
    },
    MuiSnackbar: {
      root: {
        zIndex: 999999
      }
    },
    SvgIcon: {
      root: {
        width: '2em',
        height: '2em'
      }
    }
    // MuiStepLabel: {
    //   disabled: {
    //     opacity: '.5',
    //     filter: 'saturate(0)'
    //   },
    //   active: {
    //     opacity: '1',
    //     filter: 'saturate(1)'
    //   },
    //   completed: {
    //     opacity: '1',
    //     filter: 'saturate(1)'
    //   }
    // }
  }
})

export default AdaTheme;