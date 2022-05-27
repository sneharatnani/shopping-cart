import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext.js";
import productData from "../assets/products/productData.js";

export default function Checkout() {
  // get the index of obj from context
  const { productInfo } = useContext(ProductContext);
  // find out the products whose id matches
  const finalProduct = productData.find(
    (product) => product.id === productInfo
  );
  // get digits from price string
  const getDigits = () => +finalProduct.price.match(/\d+/g)[0];
  // set number of products to count the price
  const [numOfProducts, setNumOfProducts] = useState(1);

  function increaseProducts() {
    setNumOfProducts((prevNum) => prevNum + 1);
  }

  function decreaseProducts() {
    setNumOfProducts((prevNum) => (prevNum === 0 ? prevNum : prevNum - 1));
  }

  return (
    <div className="w-1/2 flex h-[50vh] ml-8 mt-4">
      <img src={finalProduct.url} alt="a shoe" />
      <section className="ml-8">
        <p>Number of products:</p>
        <p className="border-2 inline-block text-lg font-bold">
          <button
            onClick={increaseProducts}
            className="border-r-2 text-[1.5rem] font-bold px-3"
          >
            +
          </button>
          <span className="px-3">{numOfProducts}</span>
          <button
            onClick={decreaseProducts}
            className="border-l-2 text-[1.5rem] font-bold px-3"
          >
            -
          </button>
        </p>
        <p>
          <span className="font-bold">Order Total:</span> <br />
          {getDigits() * numOfProducts}
        </p>
      </section>
    </div>
  );
}
