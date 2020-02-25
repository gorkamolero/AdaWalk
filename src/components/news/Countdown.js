import React from 'react'
import { useConfig } from 'hooks'
import styled from 'styled-components'
import Countdown from 'react-countdown'
import { Box, Container, Typography } from '@material-ui/core'
import cat from 'assets/img/ginger-cat-741.png'

const Wrap = styled.div`
  position: fixed;
  display: flex; align-items: center; justify-content: center;
  top: 0; right: 0; bottom: 0; left: 0;
  width: 100%; height: 100vh;
  background: white;
  z-index: 9999;
  user-select: none; pointer-events: none;
`
function Complete() {
  return (
    <Wrap>
      <Box>
        <Container
          p={16}
          maxWidth="sm"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h2" component="h1">
            ¡Lo sentimos mucho, el proceso de selección ha terminado!
          </Typography>
          <Box>
            <img
              style={{ maxWidth: '100%' }}
              src={cat}
              alt="Finalizado proceso"
            />
          </Box>
        </Container>
      </Box>
    </Wrap>
  )
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return completed ? (
    <Complete />
  ) : (
    (<div className="clock-container">
      <div className="clock-col">
        <p className="clock-day clock-timer">{days}</p>
        <p className="clock-label">Días</p>
      </div>
      <div className="clock-col">
        <p className="clock-hours clock-timer">{hours}</p>
        <p className="clock-label">Horas</p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">{minutes}</p>
        <p className="clock-label">Minutos</p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">{seconds}</p>
        <p className="clock-label">Segundos</p>
      </div>
    </div>
    )
  )
}


export default function AdaCountdown() {
  let { fechas: { deadline } } = useConfig()
  deadline = deadline.toDate()
  return <Countdown date={deadline} renderer={renderer} />
}
