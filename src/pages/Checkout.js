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
  const getDigits = () => finalProduct.price.match(/\d+/);
  console.log(getDigits());
  //   const [finalPrice, setFinalPrice] = useState()

  return <h1>this is Cart</h1>;
}
