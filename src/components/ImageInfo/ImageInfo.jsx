const { Component } = require("react");

class ImageInfo extends Component{
    state={
        image:null,
    }
   componentDidUpdate(prevProps, prevState ){
if(prevProps.imageName !== this.props.imageName){
   console.log('changes');
   fetch(`https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=36861352-2474982a97ff1b570eda1c4c2&image_type=photo&orientation=horizontal&per_page=12`)
   .then(res=>res.json())
   .then(image => this.setState({image}))
}
   }
    render(){
        return(
            <div>
                <h1>ImageInfo</h1>
                {this.state.image && <div>{this.state.image.hits[].tags}</div>}
                </div>
        )
    }
}
export default ImageInfo;