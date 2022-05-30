import { useContext, useState } from "react";
import { ProductContext } from "../ProductContext.js";
import CartItem from "../components/CartItem.js";
import productData from "../assets/products/productData.js";

export default function Checkout() {
  // get the index of obj from context
  const { productInfo } = useContext(ProductContext);
  const finals = productData.filter((pro) => productInfo.includes(pro.id));
  const pros = finals.map((pro) => <CartItem key={pro.id} {...pro} />);

  return <div className="bg-[whitesmoke] min-h-[90vh] ">{pros}</div>;
}
