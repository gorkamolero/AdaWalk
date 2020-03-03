import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import AdaMarquee from 'components/news/Marquee'
import Countdown from 'components/news/Countdown'

const useNewsStyles = makeStyles(theme => {
  return createStyles({
    root: {
      backgroundImage: `linear-gradient(136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.15)',
      zIndex: 1,
      position: 'fixed',
      height: '60px'
    },
  })
})

export default function News() {
  const classes = useNewsStyles()
  return (
    <Box display="flex" className={classes.root} width="100%">
      <Box style={{ flex: 1 }}>
        <Countdown />
      </Box>
      <Box style={{ flex: 3, overflow: 'hidden' }}>
        <AdaMarquee />
      </Box>
    </Box>
  )
}
