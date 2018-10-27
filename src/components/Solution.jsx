import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Anchor from "grommet/components/Anchor";
import Card from "grommet/components/Card";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import meetup from "../images/meetup.jpg";
import education from "../images/education.jpg";
import katowice from "../images/katowice.jpg";
import cooperation from "../images/cooperation.jpg";
import Section from "./Section";
import { withLocalize } from 'react-localize-redux';
import solutionTranslations from "../translations/solution.json"
import { Translate } from "react-localize-redux";

class Solution extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(solutionTranslations);
  }

  render() {
    return (

      <Translate>
    {({translate}) => 
    

      <Section className="section-solution">
        <Box
          className="footer-cards-container"
          pad={{ vertical: "medium" }}
          size={{ width: "xxlarge" }}
          direction="row"
        >
          <Tiles fill>
            <Tile align="start" basis="1/2">
              <Card
                thumbnail={<Image src={meetup} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading=
                {
                  <Heading tag="h2" strong>
                    {translate('solution.communityCard.heading')}
                  </Heading>
                }
                label={translate('solution.communityCard.label') }
                description={translate('solution.communityCard.description')}
              />
            </Tile>
            <Tile align="end" basis="1/2">
              <Card
                thumbnail={<Image src={education} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading={translate('solution.educationCard.heading')}
                textSize="small"
                label={translate('solution.educationCard.label')}
                description={translate('solution.educationCard.description')}
              />
            </Tile>
            <Tile align="start" basis="1/2">
              <Card
                thumbnail={<Image src={katowice} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading={translate('solution.silesiaCard.heading')}
                label={translate('solution.silesiaCard.label')}
                description={translate('solution.silesiaCard.description')}
              />
            </Tile>
            <Tile align="end" basis="1/2">
              <Card
                thumbnail={<Image src={cooperation} />}
                pad={{ horizontal: "small" }}
                contentPad="medium"
                heading={translate('solution.marketCard.heading')}
                label={translate('solution.marketCard.label')}
                description={translate('solution.marketCard.description')}
              />
            </Tile>
          </Tiles>
        </Box>
      </Section>
    }
      </Translate>
    );
  }
}


export default withLocalize(Solution);

const Image = ({ src }) => (
  <Box
    className={`grommetux-card__thumbnail section-solution__tile-image`}
    flex
    backgroundImage={`url(${src})`}
    basis="small"
    justify="center"
    align="center"
  />
);
