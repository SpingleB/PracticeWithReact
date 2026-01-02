const PriceSection = ( props ) => {
    const { discount } = props 
    let priceWithoutDicsount = 250;
    let price = priceWithoutDicsount;

    return (
      <div className="price-div">
        <div className="price">
          <span id="price" className="kumbh-sans-preset-2-bold">
            ${discount ? (price * discount ) / 100 : price}
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