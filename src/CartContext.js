import { createContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
