import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import login from "../pages/login";
import signin from "../pages/signin";
import password_reset_email from "../pages/password_reset_email";
import password_reset from "../pages/password_reset";
//import { Redirect } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={login} />
      <Route path="/signin" exact component={signin} />
      <Route
        path="/password/reset-email"
        exact
        component={password_reset_email}
      />
      <Route path="/password/reset" exact component={password_reset}></Route>
    </Switch>
  );
}
