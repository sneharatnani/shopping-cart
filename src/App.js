import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
