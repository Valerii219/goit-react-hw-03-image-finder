import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ImageInfo from "./ImageInfo/ImageInfo";




class App extends Component  {
  state = {
    searchText:'',
  }


searchSubmit = (searchText) =>{
  this.setState({searchText});
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit}/>
      <ImageInfo searchText={this.state.searchText}/>
      
      <ToastContainer autoClose={3000}/>
      </div>
    );
  }

  
  
};

export default App;