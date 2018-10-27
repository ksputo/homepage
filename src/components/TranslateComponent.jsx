import React from 'react';
import { Translate } from 'react-localize-redux';


const translateComponent = (WrappedComponent, translations) => 
  class withTranslation extends React.Component {

      constructor(props) {
        super(props);
    
        this.props.addTranslation(translations);
      }

    render() {
      return  (
        <Translate>
        {({translate}) =>
        
        <WrappedComponent translate={translate}/>
        }


        </Translate>
        
      )
      

    }
  }
export default translateComponent;