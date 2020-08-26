import React, { useState } from "react";
import { Modal, TextField, IconButton, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

interface PromptModal {
  open: boolean;
  handleClose: () => void;
  add: (event: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 450,
      outline: "none",
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
    padding: "5rem",
  };
}

export const PromptModal: React.FC<PromptModal> = ({
  open,
  handleClose,
  add,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [text, setText] = useState("");

  const handleAdd = () => {
    add(text);
    setText("");
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ float: "right" }}>
        <IconButton onClick={handleClose}>
          <ClearIcon />
        </IconButton>
      </div>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <h2 id="simple-modal-title">Please enter an event name:</h2>
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          value={text}
          fullWidth
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Grid>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Button onClick={handleAdd}>Add</Button>
        </Grid>
        <Grid item>
          <Button onClick={handleClose}>Cancel</Button>
        </Grid>
      </Grid>
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
