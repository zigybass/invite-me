import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button, Modal } from "@material-ui/core";
import { PromptModal } from "../Modals/PromptModal/PromptModal";

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

interface Props {
  addEvent: (event: string) => void;
}

interface ISomeModel {
  foo: string;
  bar: string;
}

interface ISomeOtherModel {
  foo: string;
  bar: string;
  baz: string;
}

// foo, bar, baz, someOtherMetadata

const someFunc = function <T>(model: T) {};

const aModel: ISomeModel = {
  foo: "foo",
  bar: "bar",
};

const fetchedModel = someFunc<ISomeOtherModel>(
  (aModel as unknown) as ISomeOtherModel
);

export default function Nav({ addEvent }: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openModal = (): void => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (event: string) => {
    addEvent(event);
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
