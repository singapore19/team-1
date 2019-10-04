import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import LandingPage from "../Pages/LandingPage";
import DashboardPage from "../Pages/Dashboard";

import createHistory from "history/createBrowserHistory";
import Forms from "../Pages/ReportForms/Forms";

export const history = createHistory();

//the props history will be passed down to all the components within it
//The original BrowserRouter automates the passing down for initially.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/report" component={Forms} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
