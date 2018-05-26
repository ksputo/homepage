import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

class Solution extends Component {
  render() {
    return (
      <Box
        className='section-solution vertically-centered'
        pad='large'
        align='center'
        full='vertical'
      >
        <Heading tag='h2' strong={true} className='section-solution__title'>
          Śląska społeczność IT jutro.
        </Heading>
        <Box
          className='footer-cards-container'
          pad={{ vertical: 'medium' }}
          size={{ width: 'xxlarge' }}
          direction='row'
        >
          <Tiles fill selectable={false}>
            <Tile align='start' basis='1/2'>
              <Card
                pad={{ horizontal: 'small' }}
                contentPad='medium'
                heading={<Heading tag="h2" strong>Spotkania, warsztaty i konferencje</Heading>}
                label='Społeczność IT'
                description='Śląscy programiści mogą pochwalić się prężną społecznością na polskiej arenie.'
              />
            </Tile>
            <Tile align='end' basis='1/2'>
              <Card
                pad={{ horizontal: 'small' }}
                contentPad='medium'
                heading='Łatwe wejście do branży'
                textSize='small'
                label='Edukacja'
                description='Ślązacy uczą się od branży IT.'
              />
            </Tile>
            <Tile align='start' basis='1/2'>
              <Card
                pad={{ horizontal: 'small' }}
                contentPad='medium'
                heading='Dobra marka regionu'
                label='Śląsk'
                description='Śląsk jest najlepszym miejscem do życia i pracy w IT w Polsce.'
              />
            </Tile>
            <Tile align='end' basis='1/2'>
              <Card
                pad={{ horizontal: 'small' }}
                contentPad='medium'
                heading='Współpraca na rynku IT'
                label='Branża IT'
                description='Wszystkie podmioty śląskiej branży IT: firmy, meetupy, konferencje, programiści pracują nad polepszeniem lokalnego rynku.'
              />
            </Tile>
          </Tiles>
        </Box>
      </Box>
    );
  }
}

export default Solution;
