import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Section from "grommet/components/Section";

class Problem extends Component {
  render() {
    return (
      <Box
        pad="large"
        align="center"
        full="vertical"
        className="section-problem vertically-centered"
      >
        <Heading tag="h2" strong={true} className="section-problem__title">
          Wyzwania śląskiej społeczności IT
        </Heading>
        <Paragraph width='large'>
          Śląsk posiada świetną i dużą społeczność IT. Na jego terenie
          organizowane jest dużo meetupów, spotkań i konferencji na wysokim
          poziomie, przyciągających dużo zainteresowanych. Jednak specyfika
          naszego, rozległego i mocno zdecentralizowanego, regionu wpływa na
          rozproszenie energi włożonej przez członków naszej społeczności.
        </Paragraph>
        <Paragraph width='large'>
          Meetupy nakładają się na siebie, ludzie z pomysłem na inicjatywę nie
          wiedzą jak ją zrealizować oraz nie znają osób, które mogłyby im pomóc.
          Świeże inicjatywy zaś mogą przejść zupełnie bez echa, nie przyciągając
          osób potencjalnie zainteresowanych poruszaną tematyką.
        </Paragraph>
        <Paragraph width='large'>
          To wszystko wpływa to na efektywność naszych działań i minimalizuje
          znaczenie największego skupiska programistów w Polsce.
        </Paragraph>
        <Paragraph width='large'>Czy można ten trend odwrócić?</Paragraph>
      </Box>
    );
  }
}

export default Problem;
