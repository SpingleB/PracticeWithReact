const Cart = ( props ) => {
    const {
        children
    } = props
    return (
      <section
        aria-labelledby="cart-title"
        className="cart"
      >
        <h2 id="cart-title" className="kumbh-sans-preset-3-bold">
          Cart
        </h2>
        <div className="products-list">
          {children}
          {!children && (
            <span className="kumbh-sans-preset-3-bold empty-message">
              Your cart is empty.
            </span>
          )}
        </div>
      </section>
    );
}

export default Cart;