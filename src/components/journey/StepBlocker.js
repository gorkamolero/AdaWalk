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
    candidates: { status: AllStatus },
    docs: { status: StatusDocs }
  } = useConfig()

  const getStatusFormalName = () => Object.keys(AllStatus).find(key => AllStatus[key] === status)

  const totalBlock = [
    AllStatus.NOT_MINIMUM_STUDIES,
    AllStatus.NOT_IN_AGE_RANGE,
    AllStatus.WITH_2_APPLICATIONS
  ].includes(user.profile.status)

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
        <Typography variant="h6" component="h1">
          Actualiza tu perfil
        </Typography>
        {<MarkDown>{StatusDocs[getStatusFormalName()]}</MarkDown>}
      </Box>
      {
        !totalBlock && (
          <>
            <Divider />
            <Box p={2}>
              
              <ArenguForm id="158316347788959567" {...options} />
            </Box>
          </>
        )
      }
    </StepContainer>
  )
}
