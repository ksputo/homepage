import React from "react";
import ReactDOM from "react-dom";
import Grommet from "grommet/components/Grommet";

import Footer from '../components/Footer';

import {
    Gallery,
    Contact,
    GalleryHeader
} 
from "../components";
// set path to gallery folder
const images = importAll(require.context('../images/gallery', false, /\.(png|jpe?g|svg)$/));

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grommet className="content-wrapper">
        <GalleryHeader title="Galeria"/>
        <Gallery imageUrls={images}/>
        <Footer />
        <Contact />
        </Grommet>
      </React.Fragment>
    );
  }
}

function importAll(r) {
    return r.keys().map(r);
  }
  
 