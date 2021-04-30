import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { facts } from '../assets/dataFiles/facts'
import Grid from '@material-ui/core/Grid'
import Cards from '../components/Cards'

const useStyles = makeStyles((theme) => ({
  card: {
    paddingTop: 5,
    paddingBottom: 5
  }
}))

function Home() {

  const classes = useStyles()

  return (
    <Grid container>
    <Grid item className={classes.card}>
      <Grid container>
      { facts.map(fact => {
        return (
          <Cards fact={fact}/>
        )
      })}
    </Grid>
    </Grid>
    </Grid>
  )
}

export default Home
