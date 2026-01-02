import ProductInfo from './product-info/ProductInfo'
import PriceSection from './price-section/PriceSection';
import AddToCart from '../add-to-card/AddToCart';

const ProductDetails = ( props ) => {
    const { discount } = props 

    return (
      <section className="product-details" aria-labelledby="info-title">
        <ProductInfo />
        <PriceSection discount={discount} />
        <AddToCart />
      </section>
    );
}

export default ProductDetails;