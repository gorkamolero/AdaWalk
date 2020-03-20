import React from 'react'
import { Redirect } from 'react-router-dom'
import { useFunctions } from 'reactfire'
import { useSnackbar } from 'notistack'
import { useConfirm } from 'material-ui-confirm'
import { FixedLinearProgress } from 'uno-material-ui'
import { Box, Button, Tabs, Tab, CircularProgress, Typography, Divider } from '@material-ui/core'
import { useConfig, useFullUser } from 'hooks'
import { useGlobalState } from 'hooks/useGlobalState'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'

export default function Proctoring() {
  const globalState = useGlobalState()
  const user = useFullUser()
  
  const [loading, setLoading] = React.useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const confirm = useConfirm()
  
  let { docs: { intros: docs } } = useConfig()
  const [tab, setTab] = React.useState(0)
  
  const collectResults = useFunctions().httpsCallable('collectResults')
  const asignarTEA = useFunctions().httpsCallable('asignarTea')

  const asignar = () => {
    confirm({
      title: 'Suspender o aprobar?',
      confirmationText: 'Aprobar',
      cancellationText: 'Suspender',
      dialogProps: {
        maxWidth: 'xs'
      }
    })
    .then(async () => {
      setLoading(true)
      await asignarTEA({
        email: user.email,
        id: user.uid,
        aprobar: true
      })
      setLoading(false)
      enqueueSnackbar(`Resultados aprobados asignados`, {
        variant: 'success'
      })
    })
    .catch(async () => {
      setLoading(true)
      await asignarTEA({
        email: user.email,
        id: user.uid,
        aprobar: false
      })
      setLoading(false)
      enqueueSnackbar(`Resultados suspensos asignados`, {
        variant: 'error'
      })
    })
  }

  const hayTests = user.profile.teaResults

  if (hayTests && !globalState.demoMode) return <Redirect to="/pasos/entrevista" />

  const collectStudentResults = async () => {
    setLoading(true)

    let candidate
    try {
      candidate = await collectResults({
        id: user.uid,
        email: user.email,
        demo: false
        // true busca un estudiante random
      })
      enqueueSnackbar(`Resultados recogidos para ${user.email}`, {
        variant: 'success'
      })
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' })
    } finally {
      setLoading(false)
      console.log(candidate)
    }
  }

  return (
    <>
      <FixedLinearProgress isLoading={loading} />
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={(ev, newTab) => setTab(newTab)}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Introducción" />
        <Tab label="Sigue las instrucciones" />
        {globalState.demoMode && user.isAdmin && <Tab label="Demo TEA" />}
      </Tabs>
      <Box p={2} textAlign="left">
        <TabPanel value={tab} index={0}>
          <MarkDown>{docs['4-Proctoring']}</MarkDown>
          <Button color="primary" variant="contained" onClick={() => setTab(1)}>
            Comenzar
          </Button>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Box pb={4}>
            <Typography gutterBottom>
              <strong>User</strong>: <em>{user.profile.email}</em>
            </Typography>
            <Typography gutterBottom>
              <strong>Password</strong>: <em>{user.profile.password}</em>
            </Typography>
            <br />
            <Divider />
          </Box>
          <MarkDown>{docs['4.5-Proctoring-terminado']}</MarkDown>
          <Box mt={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disabled={hayTests}
              onClick={collectStudentResults}
            >
              {hayTests ? (
                'Resultados obtenidos'
              ) : !loading ? (
                'He terminado'
              ) : (
                <CircularProgress color="white" size={20} />
              )}
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tab} index={2}>
          <Button color="primary" variant="contained" onClick={asignar}>
            Asignar TEA
          </Button>
        </TabPanel>
      </Box>
    </>
  )
}
