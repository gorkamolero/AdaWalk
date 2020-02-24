import React from 'react';
import Ada from './Ada';
import { Container } from '@material-ui/core'

const Stage = ({ pos, totalMoves, adaBackwards }) => {

  return (
    <Container
      className="stage"
      style={{
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        width: '100%',
        maxWidth: '100%',
        zIndex: 999
      }}
    >
      <Ada pos={pos} totalMoves={totalMoves} backwards={adaBackwards} />
    </Container>
  )
}

export default Stage