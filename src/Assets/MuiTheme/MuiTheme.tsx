import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h5: {
      fontFamily: "'Nunito', sans-serif",
      letterSpacing: ".18rem",
      fontWeight: 800,
      fontSize: "2rem",
      color: "rgb(0, 0, 0, .87)",
    },
    subtitle1: {
      fontFamily: "'Nunito', sans-serif",
      color: "rgb(0, 0, 0, .87)",
      fontSize: "1.6rem",
      fontWeight: 600,
      letterSpacing: ".1rem",
    },
    body1: {
      letterSpacing: ".05rem",
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "rgb(0, 0, 0, .87)",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        fontFamily: "'Nunito', sans-serif",
        color: "rgb(0, 0, 0, .87)",
      },
    },
  },
});

export default theme;
