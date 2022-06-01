import { useContext } from "react";
import { useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";
import { ProductContext } from "../ProductContext.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);
  // context
  const { setProductInfo, productInfo } = useContext(ProductContext);
  // add the product to list and if it already exists then increase the quantity
  function updateProducts() {
    setProductInfo((prev) => {
      if (prev.length === 0) {
        return [{ ...product, qty: 1 }];
      } else {
        return prev.map((pro) =>
          pro.id !== productId
            ? { ...product, qty: 1 }
            : pro.id === productId
            ? { ...pro, qty: pro.qty + 1 }
            : pro
        );
        // return prev.map((prod) => {
        //   if (prod.id === productId) {
        //     prod.qty = prod.qty + 1;
        //     return prod;
        //   }

        //   product.qty = 1;
        //   return product;
        // });
      }
    });

    console.log(productInfo);

    // setProductInfo((prev) =>
    //   [...prev, product].map((pro) => (!pro.qty ? { ...pro, qty: 1 } : pro))
    // );
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
