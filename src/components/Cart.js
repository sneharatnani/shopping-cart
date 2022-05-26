import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg";

export default function Cart() {
  return (
    <div>
      <Link to="/cart">
        <img src={cartIcon} alt="cart icon" />
      </Link>
    </div>
  );
}
