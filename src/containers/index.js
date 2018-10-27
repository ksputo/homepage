import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import favicon from "../images/favicon.png";
import Home from "./Home";
import Contest from "./Contest";
import NoMatch from "./404.jsx";
import Meetjs33 from "./Meetjs33";
import FriendEvents from "./FriendEvents";
import Gallery from "./Gallery";

const Routes = () => (
  <div className="app-container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/zadanie" component={Contest} />
        <Route path="/meetjs33" component={Meetjs33} />
        <Route path="/kamraci" component={FriendEvents} />
        <Route path="/galeria" component={Gallery} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
