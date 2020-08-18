import React from "react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

interface Props {
  list: Array<string>;
}

export const Home: React.FC<Props> = ({ list }) => {
  const mapEvents = (arr: Array<string>): any => {
    return arr?.map((item: string, i: number) => {
      return (
        <ListItem key={i}>
          <ListItemText>{item}</ListItemText>
        </ListItem>
      );
    });
  };

  return (
    <Container>
      <Grid container justify="center">
        <Grid item style={styles.header}>
          <Typography variant="body1">List of events</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid style={styles.events} item md={12}>
          <List>{mapEvents(list)}</List>
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = {
  header: {
    paddingTop: "4rem",
  },
  events: {
    padding: ".5rem",
  },
};
