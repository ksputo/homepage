import React from "react";
import ReactDOM from "react-dom";
import Header from "grommet/components/Header";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import Grommet from "grommet/components/Grommet";
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import LanguageToggle from '../components/LanguageToggle';

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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "Polish", code: "pl" },
        { name: "English", code: "en" }
      ],
      options: {
        renderToStaticMarkup}
    });
  }
  render() {
    return (
      <React.Fragment>
        <LanguageToggle />
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
      </React.Fragment>
    );
  }
}


export default withLocalize(Home);
