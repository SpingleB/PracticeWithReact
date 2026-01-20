import { useContext, useState, useEffect } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import Button from "../Button/Button";
import styles from "./SlideShow.module.scss";

const SlideShow = () => {

    const { gallery, galleryItemIndex } = useContext(GalleryContext);
    const [item, setItem] = useState(galleryItemIndex);
    const [isMobile, setIsMobile] = useState(false);
    const [progress, setProgress] = useState(0)
    const [isLightBoxVisible, setIsLightBoxVisible] = useState(false)

    useEffect(() => {
        setProgress(((item / gallery.length) * 100) + `%`)
        if(item === gallery.length - 1) {
            setProgress(100 + `%`)
        }
    }, [item])


    useEffect(() => {
      const checkSize = () => {
        setIsMobile(window.innerWidth < 600);
      };
      checkSize();

      window.addEventListener(`resize`, checkSize);

      return () => window.removeEventListener(`resize`, checkSize);
    }, []);

    return (
      <section className={styles.slideShow}>
        {isLightBoxVisible && (
          <div className={styles.overlay}>
            <span
              onClick={() => {
                setIsLightBoxVisible(false);
              }}
              style={{ color: `var(--color-white)` }}
              className="libre-baskerville-preset-3-bold-mobile"
            >
              CLOSE
            </span>
            <div className={styles.pictureDiv}>
              <img src={gallery[item].images.hero.large} alt="Picture" />
            </div>
          </div>
        )}
        <div className={styles.pictureDiv}>
          <img
            src={
              isMobile
                ? `${gallery[item].images.hero.small}`
                : `${gallery[item].images.hero.large}`
            }
            alt="Picture"
          />
          <Button
            className="viewButton"
            text="VIEW IMAGE"
            onClick={() => {
              setIsLightBoxVisible(true);
            }}
          >
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="nonzero">
                <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
              </g>
            </svg>
          </Button>
          <div className={styles.itemInfo}>
            <span
              className={`${
                isMobile
                  ? `libre-baskerville-preset-2-bold-mobile`
                  : `libre-baskerville-preset-2-bold-desktop`
              } ${styles.pictureName}`}
            >
              {gallery[item].name}
            </span>
            <span
              className={`${styles.artist} ${`libre-baskerville-preset-4-regular-desktop`}`}
            >
              {gallery[item].artist.name}
            </span>
          </div>
        </div>
        <div className={styles.artistPicture}>
          <img src={gallery[item].artist.image} alt="Artist Picture" />
        </div>
        <p
          className={`${styles.history} libre-baskerville-preset-3-bold-mobile`}
        >
          {" "}
          {gallery[item].description}{" "}
        </p>
        <a
          href={gallery[item].source}
          className={`${styles.sourceLink} libre-baskerville-preset-5-bold-mobile`}
          target="_blank"
        >
          GO TO SOURCE
        </a>
        <footer className={styles.footer}>
          <div
            className={styles.progress}
            style={{ width: `${progress}` }}
          ></div>
          <div className={styles.footerInfo}>
            <span
              className={`${styles.pictureName} ${isMobile ? "libre-baskerville-preset-3-bold-mobile" : "libre-baskerville-preset-3-bold-desktop"}`}
            >
              {gallery[item].name}
            </span>
            <span
              className={`${styles.artist} ${isMobile ? "libre-baskerville-preset-4-regular-mobile" : "libre-baskerville-preset-5-regular-desktop"}`}
            >
              {gallery[item].artist.name}
            </span>
          </div>
          <div className={styles.switchItem}>
            <Button
              isdisabled={item < 1}
              className="switchButton"
              onClick={() => {
                setItem(item - 1);
              }}
            >
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#000" fill="none" fillRule="evenodd">
                  <path
                    d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                    strokeWidth="2"
                  />
                  <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
                </g>
              </svg>
            </Button>

            <Button
              isdisabled={item === gallery.length - 1}
              className="switchButton"
              onClick={() => {
                setItem(item + 1);
              }}
            >
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#000" fill="none" fillRule="evenodd">
                  <path
                    d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                    strokeWidth="2"
                  />
                  <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
                </g>
              </svg>
            </Button>
          </div>
        </footer>
      </section>
    );
}

export default SlideShow;
