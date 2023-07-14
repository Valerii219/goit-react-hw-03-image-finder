import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from 'styles.module.css';

export function ImageGallery({ images }) {
  if (!images) {
    return null;
  }
  return (
    <ul className={css.ImageGallery}>
      {images.map((el) => (
        <ImageGalleryItem key={el.id} webformatURL={el.webformatURL} />
      ))}
    </ul>
  );
}