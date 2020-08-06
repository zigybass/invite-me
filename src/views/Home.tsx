import React from "react";
// import EventList from "../components/EventList/EventList";
import { Grid, Container, Typography } from "@material-ui/core";

interface Props {
  list?: Array<string> | null | undefined;
}

export const Home: React.FC<Props> = ({ list }) => {
  const mapEvents = (arr: Array<string> | null | undefined): any => {
    return <div>{list}</div>;
  };

  return (
    <>
      <Container>
        <Grid container justify="center">
          <Grid item style={styles.header}>
            <Typography variant="body1">List of events</Typography>
          </Grid>
        </Grid>
        <Grid container style={styles.header}>
          <Grid style={styles.events} item md={12}>
            {mapEvents(list)}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styles = {
  header: {
    padding: "1rem",
  },
  events: {
    padding: "2rem",
  },
};
