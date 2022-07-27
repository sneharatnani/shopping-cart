import { Link } from "react-router-dom";
import Cart from "./Cart.js";

export default function Navbar() {
  return (
    <header className="flex justify-between h-[10vh] items-center px-4 text-white md:px-20 2xl:w-[64rem] 2xl:px-0 2xl:mx-auto">
      <Link to="/" className="text-xl font-black md:text-3xl font-heading">
        Shopping<span className="text-lime-300">Cart</span>
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-lime-300">
          Home
        </Link>
        <Link to="/shop" className="hover:text-lime-300">
          Shop
        </Link>
        <Cart />
      </nav>
    </header>
  );
}
