import React, { Component } from "react";
import ModalImage from "react-modal-image";
import Spinning from 'grommet/components/icons/Spinning';

class Gallery extends Component {
  renderImage(imageUrl) {
    return (
      <ModalImage
        key={`gallery-image-${imageUrl}`}
        className="cursor gallery__images--item"
        small={imageUrl}
        large={imageUrl}
        hideZoom={true}
        hideDownload={true}
      />)
  }

  render() {
    return (
      <section className="gallery">
        <div className="gallery__images">
            {
                this.props.imageUrls
                ? this.props.imageUrls.map(this.renderImage)
                : <Spinning size='large' />
            }
        </div>
      </section>
    );
  }
}
export default Gallery;
