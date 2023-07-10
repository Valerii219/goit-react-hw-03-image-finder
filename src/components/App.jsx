import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";



class App extends Component  {

  state ={
    images:[{id: '', webformatURL : '', largeImageURL : ''}]
  }

  submitInput =(e) =>{
    this.setState({
      images:e.target.value,
      
    
    })
  }
  
  // componentDidMount () {
  //   this.getImages();
  //     }
 
  // getImages = async() =>{
  //   const data = await getAllImage()
  //   this.setState({images:[...data]})
  // }
  // import axios from "axios";
  // const API_KEY = '36861352-2474982a97ff1b570eda1c4c2'
  // axios.defaults.baseURL= `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  
  // export const getAllImage =async ()=>{
  // const{data} =await axios()
  // return data
  // }
  // componentDidUpdate(prevProps, prevState){
  //   if(this.state.page !== prevState.page || this.state.query!== prevState.query ){
  //   fetch()
  //   }
  // }
render(){return (
<>
<Searchbar onSubmit={this.submitInput}/>
</>
);

}

  
  
};

export default App;