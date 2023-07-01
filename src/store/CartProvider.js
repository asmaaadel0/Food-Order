import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemCartHandler = (itme) => {};
  const removeItemCartHandler = (itme) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {" "}
      {props.children}{" "}
    </CartContext.Provider>
  );
};
export default CartProvider;
