import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
})

const options = {
  overrides: {
    h1: {
      component: props => (
        <Typography gutterBottom component="h1" variant="h4" {...props} />
      )
    },
    h2: {
      component: props => (
        <Typography gutterBottom component="h2" variant="h6" {...props} />
      )
    },
    h3: {
      component: props => (
        <Typography
          gutterBottom
          component="h3"
          variant="subtitle1"
          {...props}
        />
      )
    },
    h4: {
      component: props => (
        <Typography
          gutterBottom
          variant="caption"
          component="h4"
          paragraph
          {...props}
        />
      )
    },
    p: { component: props => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      ))
    }
  }
}

function Markdown(props) {
  let text = JSON.parse(props.children)
  console.log(props.children, 'YOLO', text)
  return <ReactMarkdown options={options} {...props}>{text}</ReactMarkdown>
}

export default Markdown