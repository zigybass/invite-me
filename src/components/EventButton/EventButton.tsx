import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { EventModal } from "../Modals/EventModal/EventModal";

interface EventButtonProps {
  title: string;
  eventId: string;
  live: boolean;
}

export const EventButton: React.FC<EventButtonProps> = ({
  title,
  eventId,
  live,
}) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
          setId(eventId);
        }}
      >
        {title}
      </Button>
      {live && <span style={styles.live}>Live!</span>}
      <EventModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        id={id}
      />
    </>
  );
};

const styles = {
  live: {
    color: "red",
    fontWeight: 700,
    paddingBottom: ".3rem",
    paddingLeft: ".3rem",
  },
};
