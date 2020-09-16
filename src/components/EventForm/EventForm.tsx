import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface EventFormProps {
  name: string;
}

export const EventForm: React.FC<EventFormProps> = ({ name }) => {
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="subtitle1">{name}</Typography>
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
    </>
  );
};
