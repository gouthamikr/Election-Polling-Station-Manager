import React from "react";
import Login from "../Components/Login";
import { Route } from "react-router-dom";
import Register from "../Components/Register";
import Home from "../Pages/Home";
import { Switch } from "react-router-dom";
import PollingStations from "../Pages/PollingStations";

export default function Routes() {
  return (
    <div style={{ marginTop: "6%" }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/:city"
          exact
          render={(props) => <PollingStations {...props} />}
        />
      </Switch>
    </div>
  );
}
