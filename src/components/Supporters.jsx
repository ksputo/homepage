import React, { Component } from "react";
import Logos from './Logos'
import futureProcessingLogo from "../images/future-processing__logo-2017-white.png";
import katowiceLogo from "../images/katowice_logo.png";

class Supporters extends Component {
  render() {
    return <Logos logos={[futureProcessingLogo, katowiceLogo]} title='Wspierają nas'/>;
  }
}

export default Supporters;
