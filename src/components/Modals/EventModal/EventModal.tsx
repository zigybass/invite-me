import React, { useState, useEffect } from "react";
import { Modal, IconButton, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { EventForm } from "../../EventForm/EventForm";
import { getEventById } from "../../../utils/API";
import { Skeleton } from "@material-ui/lab";

/*

Create getEventById function and return JSON to EventModal. Build out some details of EventModal

*/

interface EventModalProps {
  open: boolean;
  handleClose: () => void;
  id: string;
}

interface EventData {
  name: string;
  eventId: string;
  live: boolean;
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
  const [eventData, setEventData] = useState<EventData>({
    name: "",
    eventId: "",
    live: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getEventById(id).then((res) => {
        const { data } = res;
        setEventData({
          ...eventData,
          name: data.name,
          eventId: data.id,
          live: data.onGoing,
        });
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
        {!loading && <EventForm name={eventData.name} />}
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
