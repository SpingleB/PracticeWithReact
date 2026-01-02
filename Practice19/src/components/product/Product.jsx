import { useState } from "react";

const Product = () => {
    const imagesArr = [
      `/src/images/image-product-1.jpg`,
      "/src/images/image-product-2.jpg",
      "/src/images/image-product-3.jpg",
      "/src/images/image-product-4.jpg"
    ];

    const [index, setIndex] = useState(0);

    return (
      <div className="product-div">
        <img src={imagesArr[index]} alt="Product" />
        <div className="overlay">
          <div className="left">
            {index > 0 && (
              <div
                className="perviuos"
                onClick={() => {
                  setIndex(index - 1);
                }}
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="right">
            {index !== imagesArr.length - 1 && (
              <div
                className="next"
                onClick={() => {
                  setIndex(index + 1);
                }}
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Product;