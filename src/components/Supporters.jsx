import React, { Component } from "react";
import Logos from './Logos'
import futureProcessingLogo from "../images/future-processing__logo-2017-white.png";
import katowiceLogo from "../images/katowice_logo.png";
import softserve from '../images/soft-serve.svg';
import isystems from '../images/i-systems-logo.png';
import billennium from '../images/logo_billennium-01.png';

class Supporters extends Component {
  render() {
    return <Logos logos={[
      { image: futureProcessingLogo },
      { image: katowiceLogo },
      { image: softserve },
      { image: isystems },
      { image: billennium }
    ]} title='Wspierają nas' backgroundColor='white'/>;
  }
}

export default Supporters;
