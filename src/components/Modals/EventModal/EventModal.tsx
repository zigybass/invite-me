import React, { useState, useEffect } from "react";
import { Modal, IconButton, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { EventForm } from "../../EventForm/EventForm";

/*

Create getEventById function and return JSON to EventModal. Build out some details of EventModal

*/

interface EventModalProps {
  open: boolean;
  handleClose: () => void;
  id: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "72%",
      height: "72%",
      borderRadius: ".8rem",
      outline: "none",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const EventModal: React.FC<EventModalProps> = ({
  open,
  handleClose,
  id,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    console.log(id);
  }, []);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ float: "right" }}>
        <IconButton
          onClick={() => {
            handleClose();
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <EventForm name="TEST" />
      </Grid>
    </div>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};
