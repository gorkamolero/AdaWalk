import React from 'react'
import styled from 'styled-components'
import { useConfirm } from 'material-ui-confirm'
import { useConfig } from 'hooks'
import { Grid, Card, CardActions, CardContent, Button, Typography, TextField } from '@material-ui/core'

const AdminCard = styled(Card)`
  text-align: left;
  padding: 1em;
`

const SuperTextField = styled(TextField)`
  input {
    font-size: 300%;
    font-weight: bold;
  }
`

export default function OtherConfig() {
  const config = useConfig()
  const confirm = useConfirm()

  const onConfirm = async () => {
    await confirm({
      title: 'Seguro que quieres cambiar la promo?',
      dialogProps: {
        maxWidth: 'xs'
      }
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <AdminCard>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Promoción
            </Typography>
            <Typography variant="h6" component="h2">
              Current promo
            </Typography>

            <SuperTextField
              id="current-promo"
              defaultValue={config.currentPromo}
            />
          </CardContent>
          <CardActions>
            <Button onClick={onConfirm} size="small" color="primary">
              Guardar
            </Button>
          </CardActions>
        </AdminCard>
      </Grid>
      {[1,2,3,4,5,6,7,9].map((el) => (
        <Grid key={el} item xs={4}>
          <AdminCard>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Ejemplo del día {el}
              </Typography>
              <Typography variant="h6" component="h2">
                Título
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </AdminCard>
        </Grid>
      ))}
    </Grid>
  )
}
