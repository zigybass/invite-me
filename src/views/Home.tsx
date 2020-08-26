import React from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { EventButton } from "../components/EventButton/EventButton";

interface Props {
  list: Array<string>;
}

export const Home: React.FC<Props> = ({ list }) => {
  const mapEvents = (arr: Array<string>): any => {
    return arr?.map((item: string, i: number) => {
      return (
        <div key={i} style={{ padding: ".6rem" }}>
          <ListItem>
            <EventButton title={item} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  };

  return (
    <Container>
      <Grid container justify="center">
        <Grid item style={styles.header}>
          <Typography variant="subtitle1">List of events</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={styles.events}>
          <List>{mapEvents(list)}</List>
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
