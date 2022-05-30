import { useState } from "react";

export default function CartItem(props) {
  const { price, url, title } = props;
  // number of products
  const [numOfProducts, setNumOfProducts] = useState(1);
  // get digits from price string
  const getDigits = () => +price.match(/\d+/g)[0];

  function increaseProducts() {
    setNumOfProducts((prevNum) => prevNum + 1);
  }

  function decreaseProducts() {
    setNumOfProducts((prevNum) => (prevNum === 0 ? prevNum : prevNum - 1));
  }

  return (
    <div className="flex capitalize pt-4 items-center">
      <img src={url} alt="a shoe" className="scale-[0.3] -ml-28" />
      <section className="self-center -ml-24">
        <h1 className="font-black text-gray-800 text-lg">{title}</h1>
        <p>quantity:</p>
        <p className="border-2 inline-block text-lg my-2">
          <button
            onClick={increaseProducts}
            className="border-r-2 text-[1.5rem] px-3"
          >
            +
          </button>
          <span className="px-3">{numOfProducts}</span>
          <button
            onClick={decreaseProducts}
            className="border-l-2 text-[1.5rem] px-3"
          >
            -
          </button>
        </p>
        <p>
          <span>Sub Total:</span> <br />
          {getDigits() * numOfProducts}
        </p>
      </section>
    </div>
  );
}
