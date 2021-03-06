import React, { useState, useEffect } from "react";
import { Modal, IconButton, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { EventForm } from "../../EventForm/EventForm";
import { getEventById } from "../../../utils/API";
import { Skeleton } from "@material-ui/lab";

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
  const [eventData, setEventData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getEventById(id).then((res) => {
        const { data } = res;
        setEventData(data);
        setLoading(false);
      });
    }
  }, [id]);

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
        {!loading ? (
          <EventForm data={eventData} close={handleClose} />
        ) : (
          <Grid item md={3}>
            <Skeleton animation="wave" variant="text" />
          </Grid>
        )}
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
