import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { EventModal } from "../Modals/EventModal/EventModal";

interface EventButtonProps {
  title: string;
  live: boolean;
}

export const EventButton: React.FC<EventButtonProps> = ({ title, live }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
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
      />
    </>
  );
};

const styles = {
  live: {
    color: "red",
    fontWeight: 700,
    paddingBottom: ".3rem",
  },
};
