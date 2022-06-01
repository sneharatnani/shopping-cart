export default function CartItem(props) {
  const { price, url, title, id, qty, increase, decrease } = props;

  return (
    <div className="flex capitalize items-center h-40 md:h-48">
      <img
        src={url}
        alt="a shoe"
        className="scale-[0.3] -ml-28 md:-ml-52 lg:-ml-60"
      />
      <section className="self-center -ml-24 md:-ml-40 lg:-ml-60">
        <p className="font-black text-gray-800 md:text-xl">{title}</p>
        <p className="font-bold text-lg md:text-2xl">₹{price * qty}</p>
        <p>quantity:</p>
        <p className="border-2 inline-block text-lg my-2">
          <button
            onClick={() => increase(id)}
            className="border-r-2 text-[1.5rem] px-3"
          >
            +
          </button>
          <span className="px-3">{qty}</span>
          <button
            onClick={() => decrease(id)}
            className="border-l-2 text-[1.5rem] px-3"
          >
            -
          </button>
        </p>
      </section>
    </div>
  );
}
