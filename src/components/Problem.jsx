import React, { Component } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import Section from "./Section";
import problemTranslations from "../translations/problem.json";
import translateComponent from "./TranslateComponent";
import { withLocalize } from 'react-localize-redux';

class Problem extends Component {
  render() {
    const {translate} = this.props;
    return (
      <Section color="grey" title={translate('problem.title')} className='section-problem'>
        <Paragraph width="large">
          {translate('problem.paragraph1')}
        </Paragraph>
        <Paragraph width="large">
        {translate('problem.paragraph2')}
        </Paragraph>
        <Paragraph width="large">
        {translate('problem.paragraph3')}
        </Paragraph>
        <Paragraph width="large">
        {translate('problem.paragraph4')}
        </Paragraph>
      </Section>
    );
  }
}

export default withLocalize(translateComponent(Problem, problemTranslations));
