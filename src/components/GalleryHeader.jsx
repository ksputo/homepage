import React, { Component } from "react";
import Heading from "grommet/components/Heading";
import Box from 'grommet/components/Box';


class GalleryHeader extends Component {
      render() {
        return (
          <Box align='center' className='gallery-header' full='horizontal'>
            <Heading
              tag='h1'
              strong={true}
              margin='none'
              className='text-center'
            >
              { this.props.title }
            </Heading>
          </Box>
        );
      }
    }
export default GalleryHeader;