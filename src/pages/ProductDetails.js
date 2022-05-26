import { useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);
}
