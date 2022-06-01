import { useContext } from "react";
import { CartContext } from "../CartContext.js";
import CartItem from "../components/CartItem.js";
import EmptyCart from "../components/EmptyCart.js";

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
    <div className="bg-[whitesmoke] min-h-[90vh]">
      {cartProducts.length !== 0 ? finalProducts : <EmptyCart />}
      {cartProducts.length !== 0 && (
        <section className="p-4 pb-12 text-right md:mt-20 md:p-10 lg:absolute right-20 top-32">
          <hr />
          <p className="text-lg mt-4 mb-3">
            Order Total:{" "}
            <span className="text-xl font-bold">₹{getTotal()}</span>
          </p>
          <button
            onClick={removeAllProducts}
            className="bg-gray-800 text-white font-bold p-4 rounded-lg text-lg"
          >
            Place Order
          </button>
        </section>
      )}
    </div>
  );
}
