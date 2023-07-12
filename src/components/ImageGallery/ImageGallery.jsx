import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import css from 'styles.module.css'



function  ImageGallery({images}) {
  return(
    <ul className={css.ImageGallery}>
    {images.map(image=>{
      <ImageGalleryItem
      key ={image.id}
      webformatURL ={image.webformatURL }
      largeImageURL = {image.largeImageURL }
      />
    })}
  </ul>
  )

}
export default ImageGallery;