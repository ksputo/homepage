import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';

class Solution extends Component {
  render() {
    return (
      <Box className='section-solution vertically-centered' pad='large' align='center' full='vertical'>
        <Heading tag='h2' strong={true} className='section-solution__title'>
          Śląska społeczność IT jutro.
        </Heading>
        <Box
          className='footer-cards-container'
          pad={{ vertical: 'medium' }}
          size={{ width: 'xxlarge' }}
          direction='row'
        >
          <Card
            pad={{ horizontal: 'large' }}
            contentPad='medium'
            heading='Lorem ipsum dolor sit amet'
            label='Label'
            basis='1/4'
            link={
              <Anchor href='http://www.grommet.io/docs/' primary={true}>
                Learn More
              </Anchor>
            }
            separator='right'
          />
          <Card
            pad={{ horizontal: 'large' }}
            contentPad='medium'
            heading='Lorem ipsum dolor sit amet'
            label='Label'
            basis='1/4'
            link={
              <Anchor href='http://www.grommet.io/docs/' primary={true}>
                Learn More
              </Anchor>
            }
          />
          <Card
            pad={{ horizontal: 'large' }}
            contentPad='medium'
            heading='Lorem ipsum dolor sit amet'
            label='Label'
            basis='1/4'
            link={
              <Anchor href='http://www.grommet.io/docs/' primary={true}>
                Learn More
              </Anchor>
            }
          />
          <Card
            pad={{ horizontal: 'large' }}
            contentPad='medium'
            heading='Lorem ipsum dolor sit amet'
            label='Label'
            basis='1/4'
            link={
              <Anchor href='http://www.grommet.io/docs/' primary={true}>
                Learn More
              </Anchor>
            }
          />
        </Box>
      </Box>
    );
  }
}

export default Solution;
