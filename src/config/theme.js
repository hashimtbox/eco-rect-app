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
    }
  },
  typography: {
    fontSize: 13
  }
});
