import { useContext } from "react";
import { CartContext } from "../CartContext.js";
import CartItem from "../components/CartItem.js";
import EmptyCart from "../components/EmptyCart.js";
import OrderAmount from "../components/OrderAmount.js";

export default function Checkout() {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  function increaseProducts(id) {
    setCartProducts((prevProducts) =>
      prevProducts.map((pro) =>
        pro.id === id ? { ...pro, qty: pro.qty + 1 } : pro
      )
    );
  }
  function decreaseProducts(id) {
    setCartProducts((prevProducts) =>
      prevProducts
        .map((pro) => (pro.id === id ? { ...pro, qty: pro.qty - 1 } : pro))
        .filter((obj) => obj.qty !== 0)
    );
  }

  const finalProducts = cartProducts.map((pro) => (
    <CartItem
      key={pro.id}
      {...pro}
      increase={increaseProducts}
      decrease={decreaseProducts}
    />
  ));

  function getTotal() {
    return cartProducts

      .map((pro) => pro.qty * pro.price)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  }

  function removeAllProducts() {
    setCartProducts([]);
  }

  return (
    <div className="bg-[whitesmoke] min-h-[80vh]">
      {cartProducts.length !== 0 ? finalProducts : <EmptyCart />}
      {cartProducts.length !== 0 && (
        <OrderAmount getTotal={getTotal} removeAll={removeAllProducts} />
      )}
    </div>
  );
}
