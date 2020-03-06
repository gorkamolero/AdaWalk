import React from 'react'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import { useSnackbar } from 'notistack'
import Editor from 'rich-markdown-editor'
import { Box, Button } from '@material-ui/core'


const MarkdownEditor = ({id, markdown}) => {
  const { enqueueSnackbar } = useSnackbar()
  const ref = useFirestore().doc(`config/docs`)
  const docs = useFirestoreDocData(ref)

  const [md, setMarkdown] = React.useState('')
  
  const onSave = async (e) => {
    const intros = {
      ...docs.intros,
      [id]: md
    }
    try {
      await ref.update({ intros })
      enqueueSnackbar(`Éxito!`, {
        variant: 'success'
      })
    } catch(err) {
      enqueueSnackbar(`Error: ${err.message}`, {
        variant: 'error'
      })
    }
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