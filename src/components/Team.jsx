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

import gargamel from "../images/web_version_gargamel_2.jpg";
import bart from "../images/bart.jpg";
import adam from "../images/adam.jpg";

import teamTranslations from '../translations/team.json'
import translateComponent from "./TranslateComponent";
import {withLocalize} from 'react-localize-redux';


class Team extends Component {
  render() {
    const {translate} = this.props;
    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className="section-team vertically-centered"
      >
        <Heading tag="h2" strong className="section-team__title">
          {translate('team.heading')}
        </Heading>
        <Columns size="large" justify="center">
          <Founder
            image={bart}
            name="Bartek Glac"
            title={translate('team.bart.title')}
            description={translate('team.bart.description')}
            email="bartek@gruba.it"
            mailMeLabel={translate('team.mailMeLabel')}
          />
          <Founder
            image={gargamel}
            name="Kuba Sikora"
            title={translate('team.gargamel.title')}
            description={translate('team.gargamel.description')}
            email="jakub@gruba.it"
            mailMeLabel={translate('team.mailMeLabel')}
          />

        </Columns>
      </Box>
    );
  }
}

export default withLocalize(translateComponent(Team, teamTranslations));

const Founder = ({ name, title, description, image, email, mailMeLabel }) => (
  <Box pad="large" align="center">
    <Card
      thumbnail={
        <Box
          className={`grommetux-card__thumbnail section-team__founder-image`}
          flex
          backgroundImage={`url(${image})`}
          basis="small"
          justify="center"
          align="center"
        />
      }
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
          {name}
        </Heading>
      }
      description={description}
    />
    <Button
      icon={<Pulse className="section-team__mail-icon" icon={<MailIcon />} />}
      label={mailMeLabel}
      href={`mailto:${email}`}
      className="section-team__mail-button"
    />
  </Box>
);
