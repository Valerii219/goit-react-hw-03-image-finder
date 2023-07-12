import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ImageInfo from "./ImageInfo/ImageInfo";
import ImageGallery from "./ImageGallery/ImageGallery";



class App extends Component  {
  state = {
    images:[{}],
  }
searchSubmit = images =>{
  this.setState({images});
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit}/>
      <ImageInfo imageName={this.state.images}/>
      <ImageGallery images ={this.state.images}/>
      <ToastContainer autoClose={3000}/>
      </div>
    );
  }

  
  
};

export default App;