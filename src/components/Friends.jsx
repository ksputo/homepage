import React, { Component } from "react";

import meetjs from '../images/meetjs-logo-white-katowice.svg'
import microsoft from '../images/microsoft.png'
import azure from '../images/azure.png'
import Logos from './Logos';

class Friends extends Component {
  render() {
    return (
      <Logos title='Przyjaciele' logos={[{ image: meetjs, url: 'https://katowice.meetjs.pl/' }, { image: microsoft }, {image: azure }]} className='friends' backgroundColor='grey'/>
    );
  }
}

export default Friends;
