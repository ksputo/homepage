import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

class Problem extends Component {
  render() {
    return (
      <Box pad='large' align='center' full='vertical' className='section-problem vertically-centered'>
        <Heading tag='h2' strong={true} className='section-problem__title'>
        Śląska społeczność IT dzisiaj.
        </Heading>
        <Paragraph>Problem</Paragraph>
      </Box>
    );
  }
}

export default Problem;
