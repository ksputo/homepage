import React, { Component } from "react";
import Logos from './Logos'
import futureProcessingLogo from "../images/future-processing__logo-2017-white.png";
import katowiceLogo from "../images/katowice_logo.png";
import softserve from '../images/soft-serve.svg';
import isystems from '../images/i-systems-logo.png';
import billennium from '../images/logo_billennium-01.png';
import brainhub from '../images/brainhub.svg';
import supportersTranslations from "../translations/supporters.json";
import translateComponent from "./TranslateComponent";
import { withLocalize } from 'react-localize-redux';

class Supporters extends Component {
  render() {
    const {translate} = this.props;
    return <Logos logos={[
      { image: futureProcessingLogo, url: 'https://future-processing.pl/' },
      { image: katowiceLogo, url: 'http://miasto-ogrodow.eu/' },
      { image: softserve, url: 'https://softserveinc.com/en-us/' },
      { image: isystems, url: 'https://www.i-systems.pl/' },
      { image: billennium, url: 'https://billennium.pl/' },
      { image: brainhub, url: 'https://brainhub.eu/' }
    ]} title={translate('supporters.supportersText')} backgroundColor='white'/>;
  }
}

export default withLocalize(translateComponent(Supporters, supportersTranslations));
