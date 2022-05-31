import { useContext } from "react";
import { ProductContext } from "../ProductContext.js";
import CartItem from "../components/CartItem.js";
import StyledLink from "../components/StyledLink.js";

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

  return (
    <div className="bg-[whitesmoke] min-h-[90vh]">
      {productInfo.length !== 0 ? (
        finalProducts
      ) : (
        <div
          className="text-gray-800 w-full text-center absolute left-1/2 top-1/2 transform 
        -translate-x-1/2 -translate-y-1/2"
        >
          <p className="font-black text-3xl">Your Shopping Cart Is Empty</p>
          <p className="mb-8 mt-4 text-gray-500">
            It's a good day to buy something you want!
          </p>
          <StyledLink path="shop">Continue Shopping</StyledLink>
        </div>
      )}
      {productInfo.length !== 0 && (
        <section className="p-4 pb-12 text-right">
          <hr />
          <p className="text-lg mt-4 mb-7">
            Order Total:{" "}
            <span className="text-xl font-bold">₹{getTotal()}</span>
          </p>
          <StyledLink>Place Order</StyledLink>
        </section>
      )}
    </div>
  );
}
