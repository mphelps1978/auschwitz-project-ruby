import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../assets/dataFiles/images.js";

import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles({
  header: {
    fontFamily: "Sans-Serif",
    color: "#fff",
    margin: "auto",
  },
  root: {
    paddingTop: "30px",
    margin: "80px auto 0 auto",
    maxWidth: "1200px",
  },
});

const PhotoGallery = () => {
  const classes = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <p>
        <h1 className={classes.header}>Photo Gallery</h1>
      </p>
      <p>
        <h2 className={classes.header}>
          Click on the images for an enlarged view
        </h2>
      </p>
      <Gallery
        photos={photos}
        direction={"column"}
        columns={"4"}
        onClick={openLightbox}
        width={"50"}
        height={"50"}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
