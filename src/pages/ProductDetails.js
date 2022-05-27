import { useParams } from "react-router-dom";
import productData from "../assets/products/productData.js";

export default function ProductDetails() {
  const { productId } = useParams();
  const product = productData.find((pro) => productId === pro.id);

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
        <button className="bg-black text-white font-bold w-40 py-4 rounded mt-3">
          Add To Cart
        </button>
      </section>
    </div>
  );
}
