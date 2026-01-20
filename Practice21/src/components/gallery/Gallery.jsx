import { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import styles from './Gallery.module.scss'
import SlideShow from "../slide-show/SlideShow";

const Gallery = (props) => {
  const { setGalleryItemIndex, isSlideShow, hendleShowSlideShow } = props;

  const { gallery } = useContext(GalleryContext);

    return (
      <>
        {!isSlideShow && (
          <section className={styles.gallery}>
            {gallery &&
              gallery.map((item, index) => (
                <div
                  key={index}
                  className={styles.galleryItem}
                  onClick={() => {
                    setGalleryItemIndex(index);
                    hendleShowSlideShow();
                  }}
                >
                  <div className={styles.overlay}></div>
                  <img src={item.images.thumbnail} alt="Picture" loading="lazy" />
                  <div className={styles.itemInfo}>
                    <span
                      className={`${styles.pictureName} libre-baskerville-preset-2-bold-mobile`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`${styles.artist} libre-baskerville-preset-5-regular-desktop`}
                    >
                      {item.artist.name}
                    </span>
                  </div>
                </div>
              ))}
          </section>
        )}
        {isSlideShow && (
          <SlideShow
            setGalleryItemIndex={setGalleryItemIndex}
            isSlideShow={isSlideShow}
          />
        )}
      </>
    );
}

export default Gallery;

