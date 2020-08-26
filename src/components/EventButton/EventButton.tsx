import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { EventModal } from "../Modals/EventModal/EventModal";

interface EventButtonProps {
  title: string;
}

export const EventButton: React.FC<EventButtonProps> = ({ title }) => {
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
      <EventModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
