import React, { useState } from "react";
import { Modal, IconButton, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import PromptForm from "./PromptForm";
import { Formik, Form } from "formik";
import moment from "moment";

// TO DO
// Fix date parsing error, perhaps on backend? Cannot currently add new events

interface PromptModal {
  open: boolean;
  handleClose: () => void;
  add: (event: NewEvent) => void;
}

interface ModalText {
  name: string;
  startDay: string;
  startTime: string;
}

interface NewEvent {
  name: string;
  startTime: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 550,
      outline: "none",
      borderRadius: ".8rem",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const PromptModal: React.FC<PromptModal> = ({
  open,
  handleClose,
  add,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const initialValues: ModalText = {
    name: "",
    startDay: "",
    startTime: "",
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => {
          const { name, startDay, startTime } = data;
          const dateString: string = `${startDay}T${startTime}:00Z`;
          const event: NewEvent = {
            name,
            startTime: dateString,
          };
          add(event);
        }}
      >
        {() => {
          return (
            <>
              <div style={{ float: "right" }}>
                <IconButton
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </div>
              <Grid container justify="center">
                <h2 id="simple-modal-title">New Event</h2>
              </Grid>
              <Form>
                <PromptForm />
                <Grid
                  container
                  style={styles.buttons}
                  justify="center"
                  spacing={10}
                >
                  <Grid item>
                    <Button variant="contained" type="submit">
                      Add
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleClose}>Cancel</Button>
                  </Grid>
                </Grid>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

const styles = {
  buttons: {
    paddingTop: "1.75rem",
  },
};
