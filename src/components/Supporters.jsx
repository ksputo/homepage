import React, { Component } from "react";
import Logos from './Logos'
import futureProcessingLogo from "../images/future-processing__logo-2017-white.png";
import katowiceLogo from "../images/katowice_logo.png";

class Supporters extends Component {
  render() {
    return <Logos logos={[ { image: futureProcessingLogo }, { image: katowiceLogo }]} title='Wspierają nas' backgroundColor='white'/>;
  }
}

export default Supporters;
