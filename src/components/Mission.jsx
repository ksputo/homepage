import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import GroupIcon from 'grommet/components/icons/base/Group';
import { withLocalize } from 'react-localize-redux';
import missionTranslations from "../translations/mission.json";
import { Translate } from 'react-localize-redux';

class Mission extends Component {
  constructor(props) {
    super(props);
    
    this.props.addTranslation(missionTranslations);
  }
  render() {
    return (
      <Box align='center' className='section-mission vertically-centered' full='vertical'>
        <Box
          align='center'
          textAlign='center'
          justify='center'
          size={{ width: { max: 'xxlarge' } }}
        >
            <GroupIcon
              size='xlarge'
              className='section-icon'
              colorIndex='neutral-1'
            />
          <div className='mission-clogan-container'>
            <Heading
              tag='h1'
              strong={true}
              margin='none'
              className='mission-slogan'
            >
              <Translate id="mission.heading" />
            </Heading>
            <Paragraph size='xlarge' width='large' margin='none'>
              <Translate id="mission.paragraph" />
            </Paragraph>
          </div>
        </Box>
      </Box>
    );
  }
}

Mission.propTypes = {};

export default withLocalize(Mission);
