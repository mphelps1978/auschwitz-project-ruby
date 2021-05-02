import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { facts } from "../assets/dataFiles/facts";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Cards from "../components/Cards";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  homeRoot: {
    paddingLeft: "75px",
    paddingRight: "75px",
    paddingTop: "100px",
  },
  gridList: {
    paddingTop: "50px",
  },
}));

function Home() {
  const [spacing, setSpacing] = useState(2);

  const classes = useStyles();

  return (
    <Grid container className={classes.homeRoot} spacing={2}>
      <Grid item className={classes.card} xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <GridList cellHeight={160} className={classes.gridList} cols={2}>
            {facts.map((fact) => {
              return (
                <GridListTile key={fact.id} cols={1}>
                  <Cards fact={fact.text} />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
