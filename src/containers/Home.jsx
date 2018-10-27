import React from "react";
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
import MenuWrapped from "../components/MenuWrapped";

export default class App extends React.Component {
  render() {
    return (
      <MenuWrapped>
        <Welcome />
        <Grommet className="content-wrapper">
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Supporters />
          <Friends />
          <Contact />
          <Footer />
        </Grommet>
      </MenuWrapped>
    );
  }
}
