import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";
import { ProductContext } from "../ProductContext.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);
  // context
  const { updateInfo } = useContext(ProductContext);

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
        <p className="text-xl mt-3 mb-11">{product.price}</p>
        <Link
          to="/cart"
          onClick={() => updateInfo(product.id)}
          className="bg-button-gradient py-5 px-9 rounded-full text-2xl"
        >
          Add To Cart
        </Link>
      </section>
    </div>
  );
}
