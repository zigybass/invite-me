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

  const handleAdd = (): void => {
    addEvent("Hockey");
  };

  return (
    <div className={classes.root}>
      <Toolbar>
        <Button onClick={handleAdd}>+ Event</Button>
      </Toolbar>
    </div>
  );
}
