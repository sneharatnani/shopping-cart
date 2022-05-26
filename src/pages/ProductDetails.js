import { Link, useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);

  return (
    <div className="px-8">
      <img src={product.url} alt="a shoe" className="py-5" />
      <section>
        <p className="font-bold">{product.title}</p>
        <p>{product.price}</p>
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
        <Link to="/cart">
          <button className="bg-black text-white font-bold w-full py-4 rounded mt-3">
            Add To Cart
          </button>
        </Link>
      </section>
    </div>
  );
}
