import React from "react";
import ReactDOM from "react-dom";

import Grommet from "grommet/components/Grommet";
import Box from "grommet/components/Box";
import Footer from "grommet/components/Footer";
import Paragraph from "grommet/components/Paragraph";
import gruba from "../images/logo-grey.png";

import {
  Welcome,
  Mission,
  Problem,
  Solution,
  Team,
  Contact,
  Supporters
} from "../components";

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Welcome />
        <Grommet className="content-wrapper">
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Supporters />
          <Contact />
          <Footer justify="center" align="center" size="small">
            <Box
              direction="row"
              align="center"
              pad={{ between: "medium" }}
              className="app-container__footer"
            >
              <img className="app-container__footer-logo" src={gruba} />
              <Paragraph margin="none">© 2018 Fundacja Gruba.IT</Paragraph>
            </Box>
          </Footer>
        </Grommet>
      </div>
    );
  }
}
