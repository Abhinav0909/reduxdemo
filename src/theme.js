
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#d35400",
    },
    secondary: {
      main: "#16a085",
    },
    error: {
      main: "#c0392b",
    },
    background: {
      default: "#ecf0f1",
    },
  },
});

export default theme;