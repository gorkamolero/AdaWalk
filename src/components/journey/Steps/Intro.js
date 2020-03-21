import React from 'react'
import { useFirestore } from 'reactfire'
import { Link, Redirect } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useFullUser } from 'hooks'
import { useConfig } from 'hooks'
import { Box, Button, CircularProgress } from '@material-ui/core'
import MarkDown from 'components/UI/MarkDown'
import { Steps } from 'config'

export default function Intro() {
  const [loading, setLoading] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
  let { docs: { intros} } = useConfig()
  const user = useFullUser()
  const userDoc = useFirestore().collection('candidates').doc(user.uid)
  
  const letsGo = async () => {
    setLoading(true)
    try {
      userDoc.update({ progress: 'started' })
    } catch(err) {
      enqueueSnackbar(err.message, {
        variant: 'error'
      })
    } finally {
      setLoading(false)
    }
  }

  if (user.profile.progress === 'started') return <Redirect to="/pasos/html" />

  return (
    <Box p={4} textAlign="left">
      <MarkDown>{intros['1-intro']}</MarkDown>
      <Button color="primary" variant="contained" onClick={letsGo} disabled={loading}>
        {!loading ? '¡Comenzar!' : <CircularProgress color="white" size={20} />}
      </Button>
    </Box>
  )
}
