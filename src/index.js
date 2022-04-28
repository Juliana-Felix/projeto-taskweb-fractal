import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    login: Model,
  },

  seeds(server) {
    server.db.loadData({
      logins: [
        {
          id: 1,
          firstName: "juliana",
          lastName: "felix",
          email: "jumasterjp@hotmail.com",
          senha: "jumaster",
        },
        {
          id: 2,
          firstName: "ju",
          lastName: "liana",
          email: "julygomesfs@gmail.com",
          senha: "julygomes",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/logins", () => {
      return this.schema.all("login");
    });

    this.post("/logins", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("login", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
