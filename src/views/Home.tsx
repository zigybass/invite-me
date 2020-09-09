import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { EventButton } from "../components/EventButton/EventButton";
import { getEvents } from "../utils/API";
import { EventsContext } from "../EventContext/EventsContext";

export const Home: React.FC = () => {
  const { events, setEvents } = useContext(EventsContext);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    getEvents().then((res: any): void => {
      const { data } = res;
      setEvents(data);
      setLoading(false);
    });
  }, []);

  const mapEvents = (arr: any): any => {
    return arr?.map((item: any, i: number) => {
      return (
        <div key={i} style={{ padding: ".6rem" }}>
          <ListItem>
            <EventButton
              title={item.name}
              eventId={item.id}
              live={item.onGoing}
            />
          </ListItem>
          <Divider />
        </div>
      );
    });
  };

  if (loading) {
    return (
      <Container>
        <Grid container justify="center" style={styles.header}>
          <Grid item md={3}>
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container justify="center">
        <Grid item style={styles.header}>
          <Typography variant="subtitle1">List of events</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={styles.events}>
          <List>{mapEvents(events)}</List>
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = {
  header: {
    paddingTop: "4rem",
  },
  events: {
    paddingTop: "1.5rem",
  },
};
