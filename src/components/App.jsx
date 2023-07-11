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
//   state ={
//     images:null,
//   loading:false,  }

//     componentDidMount(){
//       this.setState({loading:true})
// fetch('https://pixabay.com/api/?q=cat&page=1&key=36861352-2474982a97ff1b570eda1c4c2&image_type=photo&orientation=horizontal&per_page=12')
// .then(res=>res.json())
// .then(images => this.setState({images}))
// .finally(() => this.setState({loading:false}))

//     }
//   submitInput =(e) =>{
//     this.setState({
//       images:e.target.value,
      
//     })
//   }
  
 
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchSubmit}/>
      <ImageInfo imageName={this.state.imageName}/>
<ToastContainer autoClose={3000}/>
        {/* {this.state.loading &&  <h2>Loading...</h2>}
        {this.state.images && <p>{this.state.images.hits[1].user}</p>} */}
      </div>
    );
  }

  
  
};

export default App;