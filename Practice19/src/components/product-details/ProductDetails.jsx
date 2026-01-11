import ProductInfo from './product-info/ProductInfo'
import PriceSection from './price-section/PriceSection';
import AddToCart from '../add-to-card/AddToCart';

const ProductDetails = (props) => {
 const {isMobile, setIsMobile} = props
    return (
      <section className="product-details" aria-labelledby="info-title">
        <ProductInfo isMobile={isMobile} setIsMobile={setIsMobile} />
        <PriceSection />
        <AddToCart />
      </section>
    );
}

export default ProductDetails;