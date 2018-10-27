import React from "react";
import ReactDOM from "react-dom";
import Header from "grommet/components/Header";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import Grommet from "grommet/components/Grommet";

import Footer from '../components/Footer';

import {
  Welcome,
  Mission,
  Problem,
  Solution,
  Team,
  Contact,
  Supporters,
  Friends
} from "../components";
import Events from "../components/Events";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Welcome /> 
        <Grommet className="content-wrapper">
          <Mission />
          <Problem />
          <Solution />
          <Events/>
          <Team />
          <Supporters />
          <Friends />
          <Contact />
          <Footer />
        </Grommet>
      </React.Fragment>
    );
  }
}
