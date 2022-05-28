import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Checkout from "./pages/Checkout.js";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
