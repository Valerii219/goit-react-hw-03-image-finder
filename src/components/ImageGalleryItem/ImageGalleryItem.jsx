import css from 'styles.module.css'
function ImageGalleryItem({image: { webformatURL, largeImageURL }}){
  return(
<li className={css.ImageGalleryItem}>
  <a className="" href={largeImageURL}/>
  <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
</li>
  )
}

export default ImageGalleryItem;