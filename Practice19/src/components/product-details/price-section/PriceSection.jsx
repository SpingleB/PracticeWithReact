import { useContext } from "react";
import { ProductContext } from "../../context/PruductContext";

const PriceSection = () => {
  const { discount, price, priceWithoutDicsount, } = useContext(ProductContext);
    return (
      <div className="price-div">
        <div className="price">
          <span id="price" className="kumbh-sans-preset-2-bold">
            ${price}
          </span>
          {discount && (
            <span className="discount kumbh-sans-preset-3-bold">
              {discount}%
            </span>
          )}
        </div>
        <span className="price-without-discount kumbh-sans-preset-3-bold">
          ${priceWithoutDicsount}
        </span>
      </div>
    );
}

export default PriceSection;