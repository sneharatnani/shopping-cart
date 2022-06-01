import { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg";
import { ProductContext } from "../ProductContext.js";

export default function Cart() {
  const { productInfo } = useContext(ProductContext);
  return (
    <div className="relative">
      <Link to="/cart">
        <img src={cartIcon} alt="cart icon" />
      </Link>
      <p
        className="absolute text-white bg-red-600 h-5 w-5 rounded-full text-center
      font-bold text-sm -bottom-[3px] -left-1"
      >
        {productInfo.length}
      </p>
    </div>
  );
}
