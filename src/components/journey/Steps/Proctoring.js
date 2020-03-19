import React from 'react'
import { Redirect } from 'react-router-dom'
import { useFunctions } from 'reactfire'
import { useSnackbar } from 'notistack'
import { FixedLinearProgress } from 'uno-material-ui'
import { Box, Button, Tabs, Tab, CircularProgress } from '@material-ui/core'
import { useConfig, useFullUser } from 'hooks'
import TabPanel from 'components/UI/TabPanel'
import MarkDown from 'components/UI/MarkDown'

export default function Proctoring() {
  const [loading, setLoading] = React.useState(false)
  const user = useFullUser()
  const { enqueueSnackbar } = useSnackbar()
  
  let { docs: { intros: docs } } = useConfig()
  const [tab, setTab] = React.useState(0)
  
  const collectResults = useFunctions().httpsCallable('collectResults')

  const hayTests = user.profile.tests

  if (hayTests) return <Redirect to="/pasos/entrevista-personal" />

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
        <Tab label="He terminado" />
      </Tabs>
      <Box p={4} textAlign="left">
        <TabPanel value={tab} index={0}>
          <MarkDown>{docs['4-Proctoring']}</MarkDown>
          <Button
            color="primary"
            variant="contained"
            component="a"
            href="https://testing.verificient.com"
            target="_blank"
          >
            Comenzar
          </Button>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <MarkDown>{docs['4.5-Proctoring-terminado']}</MarkDown>
          <br/>
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
        </TabPanel>
      </Box>
    </>
  )
}
