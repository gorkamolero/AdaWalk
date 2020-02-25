import React from 'react'
import { Box } from '@material-ui/core'
import AdaMarquee from 'components/news/Marquee'
import Countdown from 'components/news/Countdown'

export default function News() {
  return (
    <Box display="flex">
      <Box style={{ flex: 1 }}>
        <Countdown />
      </Box>
      <Box style={{ flex: 3, overflow: 'hidden' }}>
        <AdaMarquee />
      </Box>
    </Box>
  )
}
