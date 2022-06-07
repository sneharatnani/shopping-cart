import { useSelector } from "react-redux";
import CartItem from "../components/CartItem.js";
import EmptyCart from "../components/EmptyCart.js";
import OrderAmount from "../components/OrderAmount.js";

export default function Checkout() {
  const cartProducts = useSelector((state) => state.cart);

  const finalProducts = cartProducts.map((pro) => (
    <CartItem key={pro.id} {...pro} />
  ));

  function getTotal() {
    return cartProducts
      .map((pro) => pro.qty * pro.price)
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
  }

  return (
    <div className="bg-[whitesmoke] min-h-[80vh]">
      {cartProducts.length !== 0 ? finalProducts : <EmptyCart />}
      {cartProducts.length !== 0 && <OrderAmount getTotal={getTotal} />}
    </div>
  );
}
