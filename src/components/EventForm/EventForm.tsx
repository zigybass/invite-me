import React from "react";
import { Grid, Typography } from "@material-ui/core";

interface EventFormProps {
  name: string;
}

export const EventForm: React.FC<EventFormProps> = ({ name }) => {
  return (
    <Grid container justify="center">
      <Grid item>
        <Typography variant="subtitle1">{name}</Typography>
      </Grid>
    </Grid>
  );
};
