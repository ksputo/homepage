import React, { Component } from "react";

import Box from "grommet/components/Box";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Columns from "grommet/components/Columns";
import Button from "grommet/components/Button";
import Pulse from "grommet/components/icons/Pulse";
import GroupIcon from "grommet/components/icons/base/Group";
import MailIcon from "grommet/components/icons/base/Mail";
import Label from "grommet/components/Label";

import gargamel from '../images/web_version_gargamel_2.jpg';

class Team extends Component {
  render() {
    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className="section-team vertically-centered"
      >
        <Heading tag="h2" strong className="section-team__title">
          Manszaft
        </Heading>
        <Columns size="large" justify="center">
          <Founder
            image="https://thumbs.dreamstime.com/b/ugly-man-face-22790067.jpg"
            name="Bartek Glac"
            title="Grubiorz"
            description="Sample description providing more details."
            email="bartek@gruba.it"
          />
          <Founder
            image={gargamel}
            name="Kuba Sikora"
            title="Grubiorz"
            description="Sample description providing more details."
            email="jakub@gruba.it"
          />
          <Founder
            image="https://thumbs.dreamstime.com/b/ugly-man-face-22790067.jpg"
            name="Adam Skowron"
            title="Grubiorz"
            description="Sample description providing more details."
            email="adam@gruba.it"
          />
        </Columns>
      </Box>
    );
  }
}

export default Team;

const Founder = ({ name, title, description, image, email }) => (
  <Box pad="large" align="center">
    <Card
      thumbnail={image}
      label={
        <Label
          uppercase="true"
          margin="none"
          className="section-team__founder-title"
        >
          {title}
        </Label>
      }
      heading={
        <Heading tag="h2" strong className="section-team__founder-name">
          {" "}
          {name}
        </Heading>
      }
      description={description}
    />
    <Button
      icon={<Pulse className="section-team__mail-icon" icon={<MailIcon />} />}
      label="Napisz do mnie"
      href={`mailto:${email}`}
      className="section-team__mail-button"
    />
  </Box>
);
