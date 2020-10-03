import React from "react";
import { Field } from "formik";
import { Grid, TextField } from "@material-ui/core";

const PromptForm: React.FC = () => {
  return (
    <>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <Field
          as={TextField}
          inputProps={{ min: 0 }}
          fullWidth
          label="Name"
          name="name"
        />
      </Grid>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <Field
          as={TextField}
          type="date"
          inputProps={{ min: 0 }}
          fullWidth
          name="startDay"
        />
      </Grid>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <Field
          as={TextField}
          inputProps={{ min: 0 }}
          fullWidth
          type="time"
          name="startTime"
        />
      </Grid>
    </>
  );
};

export default PromptForm;
