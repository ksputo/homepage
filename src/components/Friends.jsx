import React, { Component } from "react";

import meetjs from '../images/meetjs-logo-white-katowice.svg'
import microsoft from '../images/microsoft.png'
import azure from '../images/azure.png'
import qa from '../images/quality-meetup.png'
import Logos from './Logos';

class Friends extends Component {
  render() {
    return (
      <Logos title='Kamraci' logos={[
        { image: meetjs, url: 'https://katowice.meetjs.pl/' },
        { image: microsoft },
        { image: azure },
        { image: qa }
      ]} className='friends' backgroundColor='grey'/>
    );
  }
}

export default Friends;
