import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import SpriteAnimator from 'react-sprite-animator'
import { Box } from '@material-ui/core'
import AdaWalk from '../../assets/adaWalk.png'
import AdaWin from '../../assets/adaWin.png'

function usePrevious(value = 0) {
  const ref = useRef()
  useEffect(() => { ref.current = value })
  return ref.current
}

const Ada = ({mode, pos, totalMoves}) => {
  const [shouldMove, setShouldMove] = useState(false)
  const [timing] = useState(3)

  useEffect(() => {
    if (mode === 'walk') {
      setShouldMove(true)
      setTimeout(() => setShouldMove(false), timing * 1000)
    }
  }, [pos, timing, mode])


  let history = useHistory()
  
  const [adaBackwards, setAdaBackwards] = useState(false)
  const prevPos = usePrevious(pos)
  useEffect(() => {
    if (prevPos > pos) setAdaBackwards(true)
    else setAdaBackwards(false)

    if ( ['REPLACE', 'POP'].includes(history.action) ) {
      setAdaBackwards(false)
    }
  }, [pos])

  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{
        width: `calc(100% / ${totalMoves})`,
        transform: `translateX(${100 * pos}%)`,
        // transition: `${totalMoves - pos}s transform ease-in-out`
        transition: `${timing}s transform ease-in-out`
      }}
    >
      <div style={{ transform: adaBackwards ? 'scaleX(-1)' : 'none' }}>
        <div className={`ada ${mode === 'win' && 'win'}`}>
          <SpriteAnimator
            sprite={mode === 'win' ? AdaWin : AdaWalk}
            width={64}
            height={64}
            fps={mode === 'win' ? 9 : 12}
            frameCount={9}
            shouldAnimate={shouldMove}
          />
        </div>
      </div>
    </Box>
  )
}

const requiredModeCheck = (props, propName, componentName) => {
  if (!props.move && (['win', 'move', 'lose'].includes(props.move))) {
    return new Error(
      `Pásale la prop mode a <Ada /> Tiene que ser de tipo 'move' o 'win' o 'lose'.`
    )
  }
}

Ada.propTypes = {
  mode: requiredModeCheck,
  pos: PropTypes.number.isRequired,
  totalMoves: PropTypes.number.isRequired
}

export default Ada