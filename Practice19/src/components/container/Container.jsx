import Header from "../header/Header";
import Product from "../product/Product";
import ProductDetails from "../product-details/ProductDetails";
import MobileMenu from "../mobile-menu/MobileMenu";
import { useState } from "react";

const Container = () => {
const [ isOpen, setIsOpen ] = useState(false)

    return (
      <div className="container">
        <Header
          onClick={() => {
            setIsOpen(true);
          }}
        />
        <MobileMenu
          activeClass={isOpen ? `mobile-menu-active` : ``}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <div className={`${isOpen ? `overlay-active` : ``} menu-overlay`}></div>
        <Product />
        <ProductDetails discount={50} />
      </div>
    );
}

export default Container;