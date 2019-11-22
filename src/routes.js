import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Rooms from "./components/rooms/rooms";
import Library from "./components/library/library";
import Admins from "./components/admins/admins";
import Profile from "./components/profile/profile";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/rooms" exact component={Rooms} />
      <Route path="/library" exact component={Library} />
      <Route path="/admins" exact component={Admins} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
