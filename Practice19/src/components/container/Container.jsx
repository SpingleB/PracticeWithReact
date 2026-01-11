import Header from "../header/Header";
import Product from "../product/Product";
import ProductDetails from "../product-details/ProductDetails";
import MobileMenu from "../mobile-menu/MobileMenu";
import { useCallback, useMemo, useState, useEffect } from "react";
import { ProductContext } from "../context/PruductContext";

const Container = () => {
const [ isOpen, setIsOpen ] = useState(false)
let discount = 50;
const [quality, setQuality] = useState(0);
const sneakersName = "Fall Limited Edition Sneakers";
let priceWithoutDicsount = 250;
let price = discount ? (priceWithoutDicsount * discount) / 100 : priceWithoutDicsount;
let allPrice = price * quality;
const [quantityPurchased , setQuantityPurchased] = useState(0)

const [cartItem, setCartItem] = useState(() => {
  try {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
});

const addToCart = useCallback(() => {
  if (quality <= 0) return;

  setCartItem((prevCart) => {
    const newItem = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      name: sneakersName,
      price,
      allPrice: price * quality,
      quality,
      image: "src/images/image-product-1-thumbnail.jpg",
    };

    const updatedCart = [...prevCart, newItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setQuantityPurchased(updatedCart.length);

    return updatedCart;
  });
}, [quality, price, sneakersName]);


const value = useMemo(() => ({
    discount,
    quality,
    setQuality,
    sneakersName,
    priceWithoutDicsount,
    price,
    cartItem,
    setCartItem,
    allPrice,
    quantityPurchased,
    addToCart,
    setQuantityPurchased
}), [
  discount,
  quality,
  setQuality,
  sneakersName,
  priceWithoutDicsount,
  price,
  cartItem,
  setCartItem,
  allPrice,
  quantityPurchased,
  setQuantityPurchased,
  addToCart
]);

const [isMobile, setIsMobile] = useState(false);
const [isDesktop, setIsDesktop] = useState(false);
const [isTablet, setIsTablet] = useState(false);

const resize = () => {
  useEffect(() => {
      const checkSize = () => {
        setIsMobile(window.innerWidth < 600);
        setIsTablet(window.innerWidth < 900);
        setIsDesktop(window.innerWidth > 900);
      };
      checkSize();
  
      window.addEventListener(`resize`, checkSize);
  
      return () => window.removeEventListener(`resize`, checkSize);
    }, []);
}

resize();

    return (
      <ProductContext.Provider value={value}>
        <div className="container">
          <Header
            isDesktop={isDesktop}
            onClick={() => {
              setIsOpen(true);
            }}
          />
          {isTablet && (
            <MobileMenu
              activeClass={isOpen ? `mobile-menu-active` : ``}
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
          <div
            className={`${isOpen ? `overlay-active` : ``} menu-overlay`}
          ></div>
          <Product isDesktop={isDesktop} />
          <ProductDetails isMobile={isMobile} setIsMobile={setIsMobile} />
        </div>
      </ProductContext.Provider>
    );
}

export default Container;