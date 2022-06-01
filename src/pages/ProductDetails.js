import { useContext } from "react";
import { useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";
import { CartContext } from "../CartContext.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);
  const { setCartProducts } = useContext(CartContext);
  // add the product to list and if it already exists then increase the quantity
  function updateProducts() {
    setCartProducts((prevCart) => {
      if (prevCart.length === 0) {
        return [{ ...product, qty: 1 }];
      } else {
        const isExists = prevCart.some((prod) => prod.id === productId);
        const newCart = isExists
          ? prevCart.map((prod) =>
              prod.id === productId ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...prevCart, { ...product, qty: 1 }];
        return newCart;
      }
    });
  }

  return (
    <div className="h-[90vh] text-gray-800 bg-[whitesmoke]">
      <img
        src={product.url}
        alt="a shoe"
        className="top-[23vh] absolute rotate-330 right-[9vw]  md:top-[26vh] md:h-[36%] 
        lg:top-[30vh] lg:right-[5vw] lg:h-[48%]"
      />
      <section className="absolute left-[10%] top-[59%] font-black capitalize md:top-[70%] lg:top-[37%]">
        <p className="text-5xl">{product.title}</p>
        <p className="text-xl mt-3 mb-11">₹{product.price}</p>
        <button
          onClick={updateProducts}
          className="bg-button-gradient py-5 px-9 rounded-full text-2xl"
        >
          Add To Cart
        </button>
      </section>
    </div>
  );
}
