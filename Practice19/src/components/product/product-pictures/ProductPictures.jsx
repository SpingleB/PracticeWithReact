import { useState, memo } from "react";
import LightBox from "../lightbox/LightBox";

const ProductPictures = (props) => {
    const { imagesArr } = props;
    const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
    const [productPicture, setProductPicture] = useState(null)
    return (
      <div className="product-pictures">
        {imagesArr.map((img, index) => (
          <div
            key={index}
            id={index}
            onClick={() => {
              setIsLightBoxOpen(true);
              setProductPicture(index);
            }}
            className="product-picture-div"
          >
            <img src={img} alt="Product" />
          </div>
        ))}
        {isLightBoxOpen && (
          <LightBox
            onClick={() => {
              setIsLightBoxOpen(false);
            }}
            imagesArr={imagesArr}
            img={productPicture}
            isLightBoxOpen={isLightBoxOpen}
          />
        )}
      </div>
    );
}

export default memo(ProductPictures);
