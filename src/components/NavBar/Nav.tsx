import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button } from "@material-ui/core";
import { PromptModal } from "../Modals/PromptModal/PromptModal";
import { EventsContext } from "../../EventContext/EventsContext";
import { addEventToAPI } from "../../utils/API";

interface NewEvent {
  name: string;
  startTime: string;
}

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

export default function Nav() {
  const { events, setEvents } = useContext(EventsContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openModal = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleAdd = (event: NewEvent): void => {
    const { name, startTime } = event;
    const eventData = {
      name,
      startTime,
    };
    addEventToAPI(eventData)
      .then((res): void => {
        const { data } = res;
        console.log(data);
        setEvents([...events, data]);
      })
      .catch((err): void => {});
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Toolbar>
          <Button onClick={openModal}>+ Event</Button>
        </Toolbar>
      </div>
      <PromptModal open={open} add={handleAdd} handleClose={handleClose} />
    </>
  );
}
