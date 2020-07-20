import React from "react";
// import EventList from "../components/EventList/EventList";
import { Grid, Container, Typography } from "@material-ui/core";

interface Props {
  list?: string;
}

export const Home: React.FC<Props> = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item>
            <Typography variant="subtitle1">List of events</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}></Grid>
        </Grid>
      </Container>
    </>
  );
};
