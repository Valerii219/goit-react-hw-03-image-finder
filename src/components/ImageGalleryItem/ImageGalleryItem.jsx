import css from 'styles.module.css'

function ImageGalleryItem( { id,webformatURL }){
  return(
<li key ={id} className={css.ImageGalleryItem}>
  <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
</li>
  )
}

export default ImageGalleryItem;