import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/PruductContext";

const ProductInfo = (props) => {
  const {isMobile} = props

  const { sneakersName } = useContext(ProductContext)
    return (
      <>
        <span
          id="company"
          className={
            isMobile ? `kumbh-sans-preset-6-bold` : `kumbh-sans-preset-5-bold`
          }
        >
          SNEAKER COMPANY
        </span>
        <h1
          id="info-title"
          className={
            isMobile ? `kumbh-sans-preset-2-bold` : `kumbh-sans-preset-1-bold`
          }
        >
          {sneakersName}
        </h1>
        <p
          className={
            isMobile
              ? `kumbh-sans-preset-4-regular`
              : `kumbh-sans-preset-3-regular`
          }
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </>
    );
}

export default ProductInfo;