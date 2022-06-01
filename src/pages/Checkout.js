import { useContext } from "react";
import { ProductContext } from "../ProductContext.js";
import CartItem from "../components/CartItem.js";
import EmptyCart from "../components/EmptyCart.js";

export default function Checkout() {
  const { productInfo, setProductInfo } = useContext(ProductContext);

  function increaseProducts(id) {
    setProductInfo((prevProducts) =>
      prevProducts.map((pro) =>
        pro.id === id ? { ...pro, qty: pro.qty + 1 } : pro
      )
    );
  }
  function decreaseProducts(id) {
    setProductInfo((prevProducts) =>
      prevProducts
        .map((pro) => (pro.id === id ? { ...pro, qty: pro.qty - 1 } : pro))
        .filter((obj) => obj.qty !== 0)
    );
  }

  const finalProducts = productInfo.map((pro) => (
    <CartItem
      key={pro.id}
      {...pro}
      increase={increaseProducts}
      decrease={decreaseProducts}
    />
  ));

  function getTotal() {
    return productInfo
      .map((pro) => pro.qty * pro.price)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  }

  function removeAllProducts() {
    setProductInfo([]);
  }

  return (
    <div className="bg-[whitesmoke] min-h-[90vh]">
      {productInfo.length !== 0 ? finalProducts : <EmptyCart />}
      {productInfo.length !== 0 && (
        <section className="p-4 pb-12 text-right">
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
