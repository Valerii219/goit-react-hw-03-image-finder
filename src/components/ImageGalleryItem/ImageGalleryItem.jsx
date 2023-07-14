import css from 'styles.module.css'

function ImageGalleryItem({images: { id,webformatURL, largeImageURL }}){
  return(
<li key ={id} className={css.ImageGalleryItem}>
  {/* <a className="" href={largeImageURL}/> */}
  <img src={webformatURL} alt="" className={css.ImageGalleryItemImage} />
</li>
  )
}

export default ImageGalleryItem;