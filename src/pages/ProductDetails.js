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
    <div className="flex h-[53vh] w-[60vw] mt-8 mx-auto">
      <img src={product.url} alt="a shoe" className="" />
      <section className="pl-4">
        <p className="font-bold">{product.title}</p>
        <p>{product.price}</p>

        {/* fake description */}
        <p>
          <span className="font-bold">Description: </span>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla
          soluta repellat excepturi dolorum, repudiandae laborum quam eum
          maiores qui est iure vitae cupiditate quos perspiciatis nostrum enim
          sed. Quo unde magnam doloremque soluta maxime voluptatem pariatur?
          Numquam officiis eum non, neque eligendi aperiam, debitis ad porro
          asperiores itaque dolor?
        </p>
        <Link
          to="/cart"
          onClick={() => updateInfo(product.id)}
          className="bg-black text-white font-bold p-4 rounded inline-block mt-4"
        >
          Add To Cart
        </Link>
      </section>
    </div>
  );
}
