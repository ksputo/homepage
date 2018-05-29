import React, { Component } from "react";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Image from "grommet/components/Image";

class Logos extends Component {
  render() {
      const {title, logos} = this.props;

    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className="logos vertically-centered"
      >
        <Heading tag="h2" strong className="logos__title">
          {title}
        </Heading>
        <Tiles fill={true}>
            {
                logos.map((logo, index) =>  <Logo key={`logo-${index}`} logo={logo} />)
            }
        </Tiles>
      </Box>
    );
  }
}

export default Logos;

const Logo = ({ logo }) => (
    <Tile className="logos__logo-container" basis="1/2">
      <Image src={logo} className="logos__logo" />
    </Tile>
  );