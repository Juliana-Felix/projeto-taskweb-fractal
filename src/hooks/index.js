import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "./theme";

export default function AppProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
