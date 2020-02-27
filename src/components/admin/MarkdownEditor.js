import React from 'react'
import { useFirestore } from 'reactfire'
import Editor from 'rich-markdown-editor'
import { Box, Button } from '@material-ui/core'


const MarkdownEditor = ({id, markdown}) => {
  const ref = useFirestore().doc(`config/docs`)
  const [md, setMarkdown] = React.useState('')
  
  const onSave = async (e) => {
    ref.update({ [id]: md })
  }
  const onChange = (value) => {
    const markdown = JSON.stringify(value())
    console.log('YOLLOOOOO', markdown)
    setMarkdown(markdown)
    // console.log(JSON.parse(blob))
    // .replace(/\//g, '\\/');
  }
  return (
    <Box textAlign="left">
      <Editor
        title="Foo"
        defaultValue={JSON.parse(markdown)}
        onSave={onSave}
        onChange={onChange}
      />

      <br/>
      <Button color="primary" onClick={onSave}>
        Guardar
      </Button>
    </Box>
  )
}

export default MarkdownEditor