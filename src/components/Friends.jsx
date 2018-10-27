import React, { Component } from "react";

import friendProvider from '../services/friend-provider';
import Logos from './Logos';

import friendsTranslation from '../translations/friends.json'
import translateComponent from "./TranslateComponent";
import { withLocalize } from 'react-localize-redux';

class Friends extends Component {
  render() {
    const {translate} = this.props;
    return (
      <Logos title={translate('friends.heading')} logos={friendProvider().map(friend => friend.logo)} className='friends' backgroundColor='grey' />
    );
  }
}

export default withLocalize(translateComponent(Friends, friendsTranslation));
