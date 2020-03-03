import React from 'react'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default ({win}) => {
  const [fade, setFade] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setFade(true), 5000)
  }, [])
  const { width, height } = useWindowSize()
  return (
    <Confetti
      className={`fader ${fade && 'fade'}`}
      numberOfPieces={100}
      width={width}
      height={height}
    />
  )
}
