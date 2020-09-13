import { createMuiTheme } from "@material-ui/core";
import { colors } from "../utils/colors";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: colors.white
    },
    secondary: {
      main: colors.indigo
    },
    red: {
      main: colors.red
    }
  },
  typography: {
    fontSize: 13
  }
});

lightTheme.typography.h3 = {


  [lightTheme.breakpoints.up('xs')]: {
    fontSize: "26px",
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: "40px",
  }
};