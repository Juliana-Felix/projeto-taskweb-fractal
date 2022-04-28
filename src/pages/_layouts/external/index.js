import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import systemTheme from "../../../styles/themes";

import { useTheme } from "../../../hooks/theme";

function external({ children }) {
  const { darkMode } = useTheme();
  return (
    <ThemeProvider theme={systemTheme(darkMode)}>
      <Grid container>
        <Grid item lg={4} />
        <Grid item lg={4}>
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

external.propTypes = {
  children: PropTypes.element.isRequired,
};

export default external;
