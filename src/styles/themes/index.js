import { createTheme } from "@material-ui/core/styles";

export default function SystemTheme(darkMode) {
  return createTheme({
    palette: {
      type: (darkMode && "dark") || "light",
    },
  });
}
