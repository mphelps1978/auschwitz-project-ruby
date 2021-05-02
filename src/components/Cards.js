import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 5,
    marginBottom: 5,
    transition: "transform 0.15s ease-in-out",
    backgroundColor: "#192828",
    color: "#999897",
    border: "2px solid #293A3A",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
}));

export default function SimpleCard(props) {
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
    >
      <CardContent>
        <Typography variant="body2" component="p">
          {props.fact}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
