import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import GroupIcon from 'grommet/components/icons/base/Group';

class Mission extends Component {
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
              Łączymy ludzi w IT.
            </Heading>
            <Paragraph size='xlarge' width='large' margin='none'>
              Jesteśmy fundacją non-profit, która została stworzona przez członków społeczności IT na Śląsku.
              Naszą misją jest pomoc ludziom i organizacjom na Śląsku rozwijać się, tworzyć wartościowe inicjatywy i
              [PLACEHOLDER].
            </Paragraph>
          </div>
        </Box>
      </Box>
    );
  }
}

Mission.propTypes = {};

export default Mission;
