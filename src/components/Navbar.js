import { Link } from "react-router-dom";
import Cart from "./Cart.js";

export default function Navbar() {
  return (
    <header className="flex justify-between h-[10vh] items-center px-4">
      <h1 className="text-2xl font-black">
        <Link to="/">Shopping Cart</Link>
      </h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Cart />
      </nav>
    </header>
  );
}
