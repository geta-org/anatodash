import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Rooms from "./components/rooms/rooms";
import Libraries from "./components/libraries/libraries";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/libraries" exact component={Libraries} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
