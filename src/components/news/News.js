import React from 'react'
import clsx from 'clsx'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { useGlobalState } from 'hooks/useGlobalState'
import AdaMarquee from 'components/news/Marquee'
import Countdown from 'components/news/Countdown'

const useNewsStyles = makeStyles(theme => {
  return createStyles({
    root: {
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.15)',
      zIndex: 1,
      position: 'fixed',
      height: '60px'
    },
    gradient: {
      backgroundImage: `linear-gradient(136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
    }
  })
})

export default function News() {
  const classes = useNewsStyles()
  const globalState = useGlobalState()

  const styles = clsx({
    [classes.root]: true,
    [classes.gradient]: !globalState.demoMode,
    'demoMode': globalState.demoMode
  });

  return (
    <Box display="flex" className={styles} width="100%">
      <Box style={{ flex: 1 }}>
        <Countdown />
      </Box>
      <Box style={{ flex: 3, overflow: 'hidden' }}>
        <AdaMarquee />
      </Box>
    </Box>
  )
}
