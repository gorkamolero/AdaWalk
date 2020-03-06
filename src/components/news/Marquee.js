import React from 'react'
import { Typography } from '@material-ui/core'
import Marquee from 'react-smooth-marquee'

export default function JustMarquee() {
  return (
    <Marquee velocity={0.06}>
      <Typography variant="h5">
        bot Free Darko HuffPo Article Skimmer Bill Keller libel lawyer social
        media Demand Media David Cohn, newspaper data visualization Facebook
        Fuego collaboration Innovator's Dilemma hot news doctrine. analytics
        open newsroom curation shoot a photo reporting aggregation syndicated
        going forward Dan Fleckner West Seattle Blog bringing a tote bag to a
        knife fight, perfect for starting a campfire data journalism Rupert
        Murdoch hot news doctrine audience atomization overcome Tim Carmody do
        what you do best and link to the rest learnings YouTube, Zite
        TechCrunch Josh Marshall Gutenberg parenthesis The Weekender synergize
        Julian Assange reality-based NYT R&D.
      </Typography>
    </Marquee>
  )
}
