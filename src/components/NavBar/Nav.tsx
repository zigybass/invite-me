import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: ".8rem 2rem",
    backgroundColor: "#DCDCDD",
    borderRadius: "1.5rem",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Button>+ Event</Button>
      </Toolbar>
    </div>
  );
}
