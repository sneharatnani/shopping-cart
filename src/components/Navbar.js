import { Link } from "react-router-dom";
import Cart from "./Cart.js";

export default function Navbar() {
  return (
    <header className="flex justify-between h-[10vh] items-center px-4 text-white md:px-20">
      <Link to="/" className="text-xl font-black md:text-3xl">
        Shopping<span className="text-lime-300">Cart</span>
      </Link>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Cart />
      </nav>
    </header>
  );
}
