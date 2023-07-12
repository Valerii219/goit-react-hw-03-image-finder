const { Component } = require("react");

class ImageInfo extends Component {
  state = {
    images: null,
    error: null,
    status:"idle"
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      this.setState({ status:"pending", });
      fetch(
        `https://pixabay.com/api/?q=${this.props.images}&page=1&key=36861352-2474982a97ff1b570eda1c4c2&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(`No images found for ${this.props.images}`);
        })
        .then((data) => {
          if (data.hits.length > 0) {
            this.setState({ image: data.hits[1], status:'resolved' });
          } else {
            throw new Error(`No images found for ${this.props.images}`);
          }
        })
        .catch((error) => this.setState({ error, status: 'rejected'}))
        
    }
  }

  render() {
    const { image,  error, status } = this.state;
    if(status === "idle"){
     return <div>Please enter an image name</div>
    }
    if(status === "pending"){
        return <div>Loading</div>
    }
    if(status === 'rejected'){
        return <h1>{error.message}</h1>
    }
    if(status === "resolved"){
        return (
            <div>
              <h1>ImageInfo</h1>
             <img src={image.webformatURL} alt="" />
            </div>
          );
    }
    
  }
}

export default ImageInfo;

// {/* <img class = img-card src="${webformatURL}" alt="${tags}" loading="lazy"  data-source="${largeImageURL}"/> */}
// idle 
// pending 
// resolved
// rejected
