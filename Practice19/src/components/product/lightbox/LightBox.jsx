import { memo, useState } from "react";

const LightBox = (props) => {
    const { imagesArr, img, onClick, setIsLightBoxOpen  } = props;
    const [image, setImage] = useState(img);
    return (
      <div className="lightbox-overlay">
        <div className="lightbox">
          <div className="close-div">
            <svg
              id="close"
              onClick={onClick}
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#ffffff"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="lightbox-img-div">
            <img src={imagesArr[image]} alt="Product" />
            <div className="change-pictures-div">
              <div className="left">
                {image > 0 && (
                  <button
                    className="picture-btn-left"
                    onClick={() => {
                      setImage(image - 1);
                    }}
                  >
                    <svg
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="right">
                {image !== imagesArr.length - 1 && (
                  <button
                    className="picture-btn-right"
                    onClick={() => {
                      setImage(image + 1);
                    }}
                  >
                    <svg
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        stroke="#1D2026"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="lightbox-product-pictures">
            {imagesArr.map((img, index) => (
              <div
                key={index}
                id={index}
                onClick={() => {
                  setImage(index);
                }}
                className="product-picture-div"
              >
                <img src={img} alt="Product" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default memo(LightBox);