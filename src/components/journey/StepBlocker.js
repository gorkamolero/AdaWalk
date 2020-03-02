import React from 'react'
import { useConfig } from 'hooks'
import { useFullUser } from 'hooks'
import { Box, Typography } from '@material-ui/core'
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
  const options = {
    hiddenFields: [{ uid: user }],
    fields: {
      email: user.profile.email,
      nombre: user.profile.name,
      apellidos: user.profile.lastName,
      phone: user.profile.telefono,
      zip: user.profile.cp,
      birthdate: user.profile.birdthdate,
      estudios: user.profile.studies,
      dequesonestudios: user.profile.studiesDescription,
      programacion: user.profile.prevKnowledge,
      situacionLaboral: user.profile.workStatus,
      permisoDeTrabajo: user.profile.isAbleToWorkInSpain,
      horario: user.profile.preferredSchedule,
      comoNosHasConocido: user.profile.referral,
    }
  }
  return (
    <StepContainer m={2} p={4}>
      <Box p={2}>
        <Typography variant="h5" component="h1">
          Actualiza tu perfil
        </Typography>
        {<MarkDown>{StatusDocs[getStatusFormalName()]}</MarkDown>}
        <Box>
          <ArenguForm id="158316347788959567" {...options} />
        </Box>
      </Box>
    </StepContainer>
  )
}
