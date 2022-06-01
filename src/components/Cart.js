import { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg";
import { CartContext } from "../CartContext.js";

export default function Cart() {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="relative">
      <Link to="/cart">
        <img src={cartIcon} alt="cart icon" />
      </Link>
      <p
        className="absolute text-white bg-red-600 h-5 w-5 rounded-full text-center
      font-bold text-sm -bottom-[3px] -left-1"
      >
        {cartProducts.length}
      </p>
    </div>
  );
}
