import React, { useState } from "react";
import Link from "react-router-dom/Link";
import Modal from "react-modal";
import YouTube from "react-youtube";

// MUI Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuBg: {
    backgroundColor: "#182828",
  },
  title: {
    fontFamily: "Russo One",
    margin: "auto",
    fontSize: 100,
    color: "#880808",
  },
});

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Navbar() {
  const classes = useStyles();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [passId, setPassId] = useState();

  const flyover = "449ZOWbUkf0";

  function openModal(id) {
    setPassId(id);
    setmodalIsOpen(true);
  }

  function closeModal() {
    setmodalIsOpen(false);
  }
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.menuBg}>
          <Button color="inherit" component={Link} to="/">
            Facts
          </Button>
          <Button color="inherit" component={Link} to="/gallery">
            Images
          </Button>
          <Button color="inherit" onClick={() => openModal(flyover)}>
            Drone Flyover
          </Button>
          <p className={classes.title}>Auschwitz</p>
        </Toolbar>
      </AppBar>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Video Player"
      >
        <YouTube videoId={passId} />
      </Modal>
    </div>
  );
}

export default Navbar;
