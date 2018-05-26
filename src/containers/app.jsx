import React from 'react';
import ReactDOM from 'react-dom';

import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';

import {
  Welcome,
  Mission,
  Problem,
  Solution,
  Team,
  Contact
} from '../components';

export default class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <Welcome />
        <Grommet className='content-wrapper'>
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Contact />
          <Box pad='large' align='center' full='horizontal'>
            <Footer justify='between' size='small'>
              <Box direction='row' align='center' pad={{ between: 'medium' }}>
                <Paragraph margin='none'>© 2018 Fundacja Gruba.IT</Paragraph>
              </Box>
            </Footer>
          </Box>
        </Grommet>
      </div>
    );
  }
}
