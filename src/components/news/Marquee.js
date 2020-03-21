import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import ReactMarquee from 'react-smooth-marquee'
import { useConfig } from 'hooks'
import MarkDown from 'components/UI/MarkDown'

const StyledMarquee = styled(ReactMarquee)`
  a {
    color: inherit !important;
    font-weight: bold;
  }
`

const Marquee = () => {
  const config = useConfig()
  const { news } = config.docs.otros
  return (
    <StyledMarquee velocity={0.06}>
      <Typography variant="h5" style={{ color: 'rgba(255, 255, 255, .9)' }}>
        {
          [1, 2, 3].map(times => <MarkDown style={{ marginRight: '.5em' }}>{news}</MarkDown>)
        }
      </Typography>
    </StyledMarquee>
  )
}
export default Marquee
