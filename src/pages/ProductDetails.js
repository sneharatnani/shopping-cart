import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";
import { addProduct } from "../store/cartSlice.js";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);

  return (
    <div className="min-h-[80vh] text-gray-800 bg-[whitesmoke] font-black lg:h-[90vh]">
      <img
        src={product.url}
        alt="a shoe"
        className="w-72 m-auto py-8 top-[23vh] right-[9vw] md:w-3/5 lg:w-[unset] lg:py-0 
        lg:top-[30vh] lg:absolute lg:rotate-330 lg:right-[5vw] lg:h-[48%]"
      />
      <section className="w-11/12 m-auto left-[10%] top-[59%] capitalize md:w-4/5 lg:absolute lg:top-[37%] lg:w-[46%] xl:w-1/2">
        <p className="text-2xl md:text-5xl font-heading tracking-wide">
          {product.title}
        </p>
        <p className="font-normal text-sm normal-case pt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          id, blanditiis similique laborum sequi, reiciendis voluptates itaque
          at nobis earum deleniti architecto illum placeat praesentium, ad totam
          consectetur quaerat aperiam deserunt illo facilis. Hic, obcaecati
          laborum suscipit animi.
        </p>
        <p className="text-2xl mt-3 mb-6">₹{product.price}</p>
        <button
          onClick={() => dispatch(addProduct(product))}
          className="bg-button-gradient py-5 px-9 rounded-full text-2xl font-bold"
        >
          Add To Cart
        </button>
      </section>
    </div>
  );
}
