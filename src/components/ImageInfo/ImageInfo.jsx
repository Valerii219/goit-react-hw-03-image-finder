import React, { Component } from "react";
import { getImages } from '../../services/getImages';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageInfo extends Component {
  state = {
    images: [],
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: "pending" });
      getImages(this.props.searchText)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`No images found for ${this.props.searchText}`);
        })
        .then((data) => {
          if (data.hits.length > 0) {
            const images = data.hits.map((image) => ({
              id: image.id,
              webformatURL: image.webformatURL,
              largeImageURL: image.largeImageURL,
            }));
            this.setState({ images, status: "resolved" });
          } else {
            return Promise.reject(`No images found for ${this.props.searchText}`);
          }
        })
        .catch((error) => {
          this.setState({ error, status: "rejected" });
        });
    }
  }

  render() {
    const { error, status, images } = this.state;
    if (status === "idle") {
      return <div>Please enter an image name</div>;
    }
    if (status === "pending") {
      return <div>Loading</div>;
    }
    if (status === "rejected") {
      return <h2>{error.message}</h2>;
    }
    if (status === "resolved") {
      return (
        <div>
          <h1>ImageInfo</h1>
          <ImageGallery images={images} />
          <ImageGalleryItem images={images} />
        </div>
      );
    }
  }
}

export default ImageInfo;