import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Page1 from "./Page1";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page1} />
    </Switch>
  </BrowserRouter>
);