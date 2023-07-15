import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from '../services/getImages';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import WatchSpinner from './Loader/Loader'


class App extends Component {
  state = {
    searchText: '',
    images: [],
    loading:false,
    error: null,
  }

  searchSubmit = (searchText) => {
    this.setState({ searchText });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.setState({loading:true, images:[], error: null});
      getImages(this.state.searchText)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(`No images found for ${this.state.searchText}`);
        })
        .then((data) => {
          if (data.hits.length > 0) {
            const images = data.hits.map((image) => ({
              id: image.id,
              webformatURL: image.webformatURL,
              largeImageURL: image.largeImageURL,
            }));
            this.setState({ images, error: null });
          } else {
            throw new Error(`No images found for ${this.state.searchText}`);
          }
        })
        .catch((error) => {
          this.setState({ images: [], error });
        })
        .finally(()=> this.setState({loading:false}));
    }
  }

  render() {
    const {images, loading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit} />
        {loading && <WatchSpinner/>}
        {error && <div>{error.message}</div>}
        {images.length > 0 && <ImageGallery propsImage={images} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
