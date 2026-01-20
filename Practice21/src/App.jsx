import Logo from "../public/images/shared/logo.svg";
import { useState,useEffect, useMemo } from "react";
import Gallery from "./components/gallery/Gallery";
import { GalleryContext } from "./context/GalleryContext";

function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [gallery, setGallery] = useState(null)
  const [isSlideShow, setIsSlideShow] = useState(false)
  const [galleryItemIndex, setGalleryItemIndex] = useState(0)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    checkSize();

    window.addEventListener(`resize`, checkSize);

    return () => window.removeEventListener(`resize`, checkSize);
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки");
        }
        return response.json();
      })
      .then((data) => setGallery(data))
      .catch((err) => console.error(err));
  }, [])

  function hendleShowSlideShow () {
    setIsSlideShow(prev => !prev)
  }

  const value = useMemo(
    () => ({
      gallery,
      galleryItemIndex,
      setGalleryItemIndex,
    }),
    [
      gallery, 
      galleryItemIndex, 
      setGalleryItemIndex
    ],
  );


  return (
    <GalleryContext.Provider value={value}>
      <div className="container">
        <header className="header">
          <img src={Logo} alt="Logo" />
          <span
            onClick={() => {
              hendleShowSlideShow();
              setGalleryItemIndex(0);
            }}
            className={`start-ss ${isMobile ? `libre-baskerville-preset-5-bold-mobile` : `libre-baskerville-preset-6-bold-desktop`}`}
          >
            {isSlideShow ? `STOP SLIDESHOW` : `START SLIDESHOW`}
          </span>
        </header>
        {gallery ? (
          <Gallery
            hendleShowSlideShow={hendleShowSlideShow}
            isSlideShow={isSlideShow}
            galleryItemIndex={galleryItemIndex}
            setGalleryItemIndex={setGalleryItemIndex}
          />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </GalleryContext.Provider>
  );
}

export default App;
