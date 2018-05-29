import React, { Component } from 'react';
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Image from "grommet/components/Image";
import futureProcessingLogo from '../images/future-processing__logo-2017-white.png'
import katowiceLogo from '../images/katowice-logo.jpg'

class Supporters extends Component {
    render() {
        return (
            <Box
            pad="large"
            align="center"
            full="vertical"
            className="supporters vertically-centered"
          >
            <Heading tag="h2" strong className="supporters__title">
              Wspierają nas
            </Heading>
            <Tiles fill={true}>
            <Tile>
                <Image src={futureProcessingLogo}/>
            </Tile>
            <Tile>
                <Image src={katowiceLogo}/>
            </Tile>
            </Tiles>
          </Box>
        );
    }
}

export default Supporters;