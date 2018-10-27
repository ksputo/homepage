import React, { Component } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import Section from "./Section";

class Problem extends Component {
  render() {
    return (
      <Section color="grey" title="Wyzwania śląskiej społeczności IT" className='section-problem'>
        <Paragraph width="large">
          {translate('problem.paragraph1')}
        </Paragraph>
        <Paragraph width="large">
          Meetupy nakładają się na siebie, ludzie z pomysłem na inicjatywę nie
          wiedzą jak ją zrealizować oraz nie znają osób, które mogłyby im pomóc.
          Świeże inicjatywy zaś mogą przejść zupełnie bez echa, nie przyciągając
          osób potencjalnie zainteresowanych poruszaną tematyką.
        </Paragraph>
        <Paragraph width="large">
          
        </Paragraph>
        <Paragraph width="large">Czy można ten trend odwrócić?</Paragraph>
      </Section>
    );
  }
}

export default Problem;
