import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from '../services/getImages';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import WatchSpinner from './Loader/Loader'
import LoadMore from "./Button/Button";

class App extends Component {
  state = {
    searchText: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 0,
    perPage: 12,
    data:[],
  }

  searchSubmit = (searchText) => {
    this.setState({ searchText  });
  }
 

  componentDidUpdate(prevProps, prevState) {
    const { perPage, page, searchText } = this.state;
    if (prevState.searchText !== searchText) {
      
      this.setState({ loading: true, images: [], error: null, page:1,});
      getImages(searchText,  page , perPage)
     
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(`No images found for ${searchText}`);
        })
        .then((data) => {
          if (data.hits.length > 0) {
            const images = data.hits.map((image) => ({
              id: image.id,
              webformatURL: image.webformatURL,
              largeImageURL: image.largeImageURL,
            }));
          this.setState((prevState) => ({
              images: [...prevState.images, ...images],
              totalPages: Math.ceil(data.totalHits / perPage),
            }));
          } else {
            throw new Error(`No images found for ${searchText}`);
          }
        })
        .catch((error) => {
          this.setState({ images: [], error });
        })
        .finally(() => this.setState({ loading: false }));
    }
  
  }
  loadMore = () => {
    const { page,  totalPages} = this.state;
    if (page < totalPages ) {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
      
        }),
        () => {
          getImages()
        }
      );
    }
  }
  

  render() {
    const { images, loading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit} />
        {loading && <WatchSpinner />}
        {error && <div>{error.message}</div>}
        {images.length > 0 && <ImageGallery propsImage={images} />}
        {images.length > 0 && <LoadMore loadMore={this.loadMore} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;