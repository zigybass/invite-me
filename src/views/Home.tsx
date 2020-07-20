import React from "react";
// import EventList from "../components/EventList/EventList";
import { Grid, Container, Typography } from "@material-ui/core";

interface Props {
  list?: string | null;
}

export const Home: React.FC<Props> = ({ list }) => {
  return (
    <>
      <Container>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="body1">List of events</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid style={styles.events} item md={12}>
            {list}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styles = {
  events: {
    padding: "2rem",
  },
};
