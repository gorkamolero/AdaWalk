import React from 'react'
import { useConfig, useArenguHiddenFields } from 'hooks'
import { useFullUser } from 'hooks'
import { Box, Typography, Divider } from '@material-ui/core'
import { StepContainer } from 'components/UI/common'
import MarkDown from 'components/UI/MarkDown'
import ArenguForm from 'components/UI/ArenguForm'

export default function StepBlocker({ status }) {
  const user = useFullUser()
  const {
    candidates: { status: configStatus, admission },
    docs: { status: StatusDocs }
  } = useConfig()

  const AllStatus = { ...configStatus, ...admission }


  const getStatusFormalName = () => Object.keys(AllStatus).find(key => AllStatus[key] === status)

  const totalBlock = [
    AllStatus.NOT_MINIMUM_STUDIES,
    AllStatus.NOT_IN_AGE_RANGE,
    AllStatus.WITH_2_APPLICATIONS
  ].includes(user.profile.status)

  const admissionBlock = [
    AllStatus.NOT_ADMITTED_TEST_ONLINE,
    AllStatus.NOT_ADMITTED_PROCTORING,
    AllStatus.NOT_ADMITTED_INTERVIEW
  ].includes(status)

  const options = {
    hiddenFields: useArenguHiddenFields(),
    fields: {
      workStatus: user.profile.workStatus,
      isAbleToWorkInSpain: user.profile.isAbleToWorkInSpain,
    }
  }
  return (
    <StepContainer position="absolute" m={2} p={4}>
      <Box p={2} mb={!totalBlock ? 2 : 0}>
        {!admissionBlock && (
          <Typography variant="h6" component="h1">
            Actualiza tu perfil
          </Typography>
        )}

        <Box textAlign="left">
          {<MarkDown>{StatusDocs[getStatusFormalName()]}</MarkDown>}
        </Box>
      </Box>
      {!totalBlock && !admissionBlock && (
        <>
          <Divider />
          <Box p={2}>
            <ArenguForm id="158316347788959567" {...options} />
          </Box>
        </>
      )}
    </StepContainer>
  )
}
