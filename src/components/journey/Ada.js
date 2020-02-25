import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import SpriteAnimator from 'react-sprite-animator'
import { Box } from '@material-ui/core'
import AdaWalk from '../../assets/adaWalk.png'

function usePrevious(value = 0) {
  const ref = useRef()
  useEffect(() => { ref.current = value })
  return ref.current
}

const Ada = ({pos, totalMoves}) => {
  const [shouldMove, setShouldMove] = useState(false)
  const [timing] = useState(3)


  useEffect(() => {
    setShouldMove(true)
    setTimeout(() => setShouldMove(false), timing * 1000)
  }, [pos, timing])


  let history = useHistory()
  
  const [adaBackwards, setAdaBackwards] = useState(false)
  const prevPos = usePrevious(pos)
  useEffect(() => {
    if (prevPos > pos) setAdaBackwards(true)
    else setAdaBackwards(false)

    if ( ['REPLACE', 'POP'].includes(history.action) ) {
      console.log('IS')
      setAdaBackwards(false)
    }
  }, [pos, history.action, prevPos])

  return (
    <Box
      display="flex"
      justifyContent="center"
      className="ada"
      style={{
        width: `calc(100% / ${totalMoves})`,
        transform: `translateX(${100 * pos}%)`,
        // transition: `${totalMoves - pos}s transform ease-in-out`
        transition: `${timing}s transform ease-in-out`
      }}
    >
      <div style={{ transform: adaBackwards ? 'scaleX(-1)' : 'none' }}>
        <SpriteAnimator
          sprite={AdaWalk}
          width={64}
          height={64}
          fps={12}
          frameCount={9}
          shouldAnimate={shouldMove}
        />
      </div>
    </Box>
  )
}

export default Ada