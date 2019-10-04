import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PublicRoute from './PublicRoute';


import createHistory from "history/createBrowserHistory";

export const history=createHistory();

//the props history will be passed down to all the components within it 
//The original BrowserRouter automates the passing down for initially.
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {/* <PublicRoute path="/" component={Default} exact={true} />
        <PublicRoute path="/report" component={DefaultTwo} exact={true} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
