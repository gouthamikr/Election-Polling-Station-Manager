import React from "react";
import Login from "../Components/Login";
import { Route } from "react-router-dom";
import Register from "../Components/Register";
import Home from "../Pages/Home";

export default function Routes() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </div>
  );
}
