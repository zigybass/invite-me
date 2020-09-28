import React, { useState, useContext } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { deleteEvent } from "../../utils/API";
import { ConfirmModal } from "../Modals/ConfirmModal/ConfirmModal";
import { EventsContext } from "../../EventContext/EventsContext";

interface EventFormProps {
  data: any;
  close: () => void;
}

type Modal = {
  open: boolean;
  loading: boolean;
};

export const EventForm: React.FC<EventFormProps> = ({ data, close }) => {
  const { events, setEvents, openSnack } = useContext(EventsContext);
  const [modal, setModal] = useState<Modal>({
    open: false,
    loading: false,
  });

  const handleDelete = (): void => {
    setModal({ ...modal, loading: true });
    deleteEvent(data.eventId).then((res) => {
      const { id } = res.data;
      const newEvents = events.filter((item: any) => {
        if (item.id != id) {
          return item;
        }
      });
      setEvents(newEvents);
      setModal({ ...modal, loading: false, open: false });
      close();
      openSnack("Event deleted succesfully!");
    });
  };

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="subtitle1">{data.name}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">Location: test</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">Time: 6:00 PM</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">People confirmed: 8</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2}>
          <Typography variant="body1">Description:</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body2">
            Two teams compete for points. When you catch the disk, stop moving.
            It's like soccer but with a frisbee.
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={styles.content} />
      <Grid container>
        <Grid item md={4}>
          <Button
            onClick={() => {
              setModal({ ...modal, open: true });
            }}
            variant="contained"
          >
            Delete Event
          </Button>
        </Grid>
      </Grid>
      <ConfirmModal
        open={modal.open}
        handleClose={() => {
          setModal({ ...modal, open: false });
        }}
        confirm={handleDelete}
        loading={modal.loading}
      />
    </>
  );
};

const styles = {
  content: {
    height: "28vh",
  },
};
