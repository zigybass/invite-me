import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { EventButton } from "../components/EventButton/EventButton";
import { getEvents } from "../utils/API";

// TO DO
// Refactor events list on App and update API to addEvents

export const Home: React.FC = () => {
  const [events, setEvents] = useState([]);
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
            <EventButton title={item.name} live={item.onGoing} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  };

  if (loading) {
    return (
      <Grid container>
        <Grid item>
          <Typography variant="subtitle1">Loading Page...</Typography>
        </Grid>
      </Grid>
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
