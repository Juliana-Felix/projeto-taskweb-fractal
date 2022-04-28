import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import systemTheme from "../../../styles/themes";

function internal({ children }) {
  return <ThemeProvider theme={systemTheme()}>{children}</ThemeProvider>;
}

internal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default internal;
