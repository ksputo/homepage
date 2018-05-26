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
        <Paragraph>
          Śląsk posiada świetną i dużą społeczność IT. Specyfika naszego regionu wpływa na rozproszenie energi włożonej przez pojedynczych członków tej społeczności.
        </Paragraph>
        <Paragraph>
           Meetupy się nakładają na siebie, ludzie z pomysłem na inicjatywę nie znają ludzi z know-how jak tę inicjatywę zrealizować. Wpływa to na efektywność naszych działań i minimalizuje znaczenie największego skupiska programistów w Polsce.
        </Paragraph>
        <Paragraph>
          Czy można ten trend odwrócić?
        </Paragraph>
      </Box>
    );
  }
}

export default Problem;
