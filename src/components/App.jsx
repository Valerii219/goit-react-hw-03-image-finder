import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ImageInfo from "./ImageInfo/ImageInfo";



class App extends Component  {
  state = {
    imageName:'',
  }
searchSubmit = imageName =>{
  this.setState({imageName});
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit}/>
      <ImageInfo imageName={this.state.imageName}/>
      <ToastContainer autoClose={3000}/>
      </div>
    );
  }

  
  
};

export default App;