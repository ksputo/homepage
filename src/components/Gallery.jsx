import React, { Component } from "react";
import ModalImage from "react-modal-image";

class Gallery extends Component {
  renderImage(imageUrl) {
    return (
      <ModalImage
        className="cursor gallery-item"
        small={imageUrl}
        large={imageUrl}
        hideZoom={true}
        hideDownload={true}
      />)
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