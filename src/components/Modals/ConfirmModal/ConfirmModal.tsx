import React, { useState } from "react";
import { Modal, TextField, IconButton, Grid, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

interface ConfirmModal {
  open: boolean;
  handleClose: () => void;
  confirm: () => void;
  loading: boolean;
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

export const ConfirmModal: React.FC<ConfirmModal> = ({
  open,
  handleClose,
  confirm,
  loading,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ float: "right" }}>
        <IconButton
          onClick={() => {
            handleClose();
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
      <Grid container justify="center" style={{ padding: ".3rem 1.8rem" }}>
        <h2 style={styles.header} id="simple-modal-title">
          Confirm Delete?
        </h2>
      </Grid>
      <Grid container style={styles.buttons} justify="center" spacing={10}>
        <Grid item>
          <Button disabled={loading} variant="contained" onClick={confirm}>
            Yes
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={loading}
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
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

const styles = {
  buttons: {
    paddingTop: "1.75rem",
  },
  header: {
    paddingBottom: "2.25rem",
  },
};
