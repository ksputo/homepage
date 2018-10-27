import React, { Component } from "react";
import ModalImage from "react-modal-image"
import Box from "grommet/components/Box";
import Section from "grommet/components/Section";

const closeLightbox = () => {
  this.state.open = true;
};

class Gallery extends Component {

    renderImage(imageUrl) {
        return (
          <ModalImage
          className="cursor gallery-item"
          small={imageUrl}
          large={imageUrl}
          hideZoom={true}
          hideDownload={true}
          />
        );
      }
    
      render() {
        return (
          <div className="gallery">         
            <div className="images">
              {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
            </div>
          </div>
        );
      }
    }
export default Gallery;