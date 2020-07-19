import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h5: {
      fontFamily: "Baloo Da 2, cursive",
      letterSpacing: ".13rem",
    },
    subtitle1: {
      fontFamily: "Baloo Da 2, cursive",
      color: "0, 0, 0, .2",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: "Baloo Da 2, cursive",
      },
    },
  },
});

export default theme;
