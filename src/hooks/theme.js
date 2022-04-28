import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const updateMode = useCallback(() => {
    setDarkMode(!darkMode);
  });

  return (
    <ThemeContext.Provider value={{ darkMode, updateMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme deve ser utilizado dentro de um contexto de Theme"
    );
  }

  return context;
}
