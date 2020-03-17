import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth, useFunctions } from 'reactfire'
import { useSnackbar } from 'notistack'
import { useConfirm } from 'material-ui-confirm'
import { FixedLinearProgress } from 'uno-material-ui'
import { SuperCenter } from 'components/UI/common'
import {
  TextField,
  Box,
  Button,
  Container,
  CircularProgress
} from '@material-ui/core'
import AdaHeader from 'components/UI/AdaHeader'


export default function LoginForm() {
  const functions = useFunctions()

  const location = useLocation()
  const auth = useAuth()
  const confirm = useConfirm()
  const [loading, setLoading] = React.useState(false)

  const [email, setEmail] = React.useState('')
  const [emailSent, setEmailSent] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()


  const sendEmailLink = async () => {
    setLoading(true)
    
    const actionCodeSettings = {
      url: 'http://localhost:3000',
      handleCodeInApp: true
    }
  

    const doesUserExist = functions.httpsCallable('doesUserExist')
    const response = await doesUserExist(email)

    const { dbUser, admin } = response.data

    console.log(response)
    
    if (dbUser || admin) {
      try {
        await auth.sendSignInLinkToEmail(email, actionCodeSettings)
        window.localStorage.setItem('emailForSignIn', email)
        setEmailSent(true)
        enqueueSnackbar(`Te hemos enviado un email a ${email}`, {
          variant: 'success'
        })
      } catch (err) {
        enqueueSnackbar('Error creando link: ' + err.message, {
          variant: 'error'
        })
      } finally {
        setLoading(false)
      }
    }

    else {
      await confirm({
        title: 'Email no he encontrado',
        description: `No hemos encontrado un usuario correspondiente a ${email}`,
        dialogProps: {
          maxWidth: 'xs'
        }
      })

      enqueueSnackbar(`No encontramos usuario ${email}`, {
        variant: 'error'
      })
      setLoading(false)
    }
    
  }

  const onSubmit = (e) => {
    e.preventDefault()
    sendEmailLink()
  }

  React.useEffect(() => {
    const href = window.location.href
    
    const confirmSignIn = async url => {
      try {
        if (auth.isSignInWithEmailLink(url)) {
          let email = window.localStorage.getItem('emailForSignIn')
          if (!email) {
            email = window.prompt('Por favor, introduce tu email de nuevo')
          }

          await auth.signInWithEmailLink(email, url)
          window.localStorage.removeItem('emailForSignIn')
        }
      } catch (err) {
        // enqueueSnackbar('Error en la URL: ' + err.message, { variant: 'error' })
      }
    }
    confirmSignIn(href)
    return () => confirmSignIn(href)
  }, [location, auth, enqueueSnackbar])

  return (
    <SuperCenter>
      <FixedLinearProgress isLoading={loading} />
      <Container component="form" maxWidth="xs" onSubmit={onSubmit}>
        <AdaHeader icon="lock" title="Iniciar Sesión" />
        <TextField
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
        />
        <Box mt={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disabled={emailSent}
          >
            {emailSent ? (
              'Comprueba tu email'
            ) : !loading ? (
              'Comenzar'
            ) : (
              <CircularProgress color="white" size={20} />
            )}
          </Button>
        </Box>
        {/* {
            emailSent && (
              <Box p={4}>
                <Typography>Email enviado!</Typography>
              </Box>
            )
          }
           */}
      </Container>
    </SuperCenter>
  )
}
