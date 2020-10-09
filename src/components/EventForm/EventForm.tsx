import React, { useState, useContext, useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { deleteEvent } from "../../utils/API";
import { ConfirmModal } from "../Modals/ConfirmModal/ConfirmModal";
import { EventsContext } from "../../EventContext/EventsContext";
import moment from "moment";

interface EventFormProps {
  data: any;
  close: () => void;
}

type Modal = {
  open: boolean;
  loading: boolean;
};

type Times = {
  startTime: string;
  startDay: string;
  startDate: string;
  endTime: string;
  endDay: string;
  endDate: string;
};

export const EventForm: React.FC<EventFormProps> = ({ data, close }) => {
  const { events, setEvents, openSnack } = useContext(EventsContext);
  const [times, setTimes] = useState<Times>({
    startTime: "--",
    startDay: "--",
    startDate: "--",
    endTime: "--",
    endDay: "--",
    endDate: "--",
  });
  const [modal, setModal] = useState<Modal>({
    open: false,
    loading: false,
  });

  useEffect(() => {
    if (data.startTime) {
      const startTime = moment.utc(data.startTime).format("LT");
      const startDay = moment.utc(data.startTime).format("dddd");
      const startDate = moment.utc(data.startTime).format("MMMM Do");
      setTimes({ ...times, startTime, startDate, startDay });
    }

    if (data.endTime) {
      const endTime = moment.utc(data.endTime).format("LT");
      const endDay = moment.utc(data.endTime).format("MMMM Do");
      const endDate = moment.utc(data.endTime).format("MMMM Do");
      setTimes({ ...times, endDate, endDay, endTime });
    }
  }, []);

  const handleDelete = (): void => {
    setModal({ ...modal, loading: true });
    deleteEvent(data.id).then((res) => {
      const { id } = res.data;
      const newEvents = events.filter((item: any) => {
        if (item.id !== id) {
          return item;
        }
      });
      setModal({ ...modal, loading: false, open: false });
      close();
      setEvents(newEvents);
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
          <Typography variant="body1">
            Location: {data.location.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">
            Day: {`${times.startDay}, ${times.startDate}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">Start Time: {times.startTime}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">End Time: {times.endTime} </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">Confirmed: {data.attending} </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={4}>
          <Typography variant="body1">Declined: {data.declined} </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2}>
          <Typography variant="body1">Description:</Typography>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body2">{data.description}</Typography>
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
