import React from "react";
import AppProvider from "./hooks";
import history from "./services/history";
import { Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </AppProvider>
  );
}

export default App;
