export default function CartItem(props) {
  const { price, url, title, id, qty, increase, decrease } = props;

  return (
    <>
      <div className="flex capitalize items-center h-40 md:h-48">
        <img
          src={url}
          alt="a shoe"
          className="scale-[0.3] -ml-28 md:-ml-52 lg:-ml-60"
        />
        <section className="self-center -ml-24 md:-ml-40 lg:-ml-60">
          <p className="font-black text-gray-800 md:text-xl font-heading">
            {title}
          </p>
          <p className="font-bold text-lg md:text-2xl">₹{price * qty}</p>
          <p className="inline-block my-2">
            <button
              onClick={() => increase(id)}
              className="h-8 w-8 rounded-full font-bold border border-gray-400"
            >
              +
            </button>
            <span className="px-3">{qty}</span>
            <button
              onClick={() => decrease(id)}
              className="h-8 w-8 rounded-full font-bold border border-gray-400"
            >
              ‒
            </button>
          </p>
        </section>
      </div>
      <br />
    </>
  );
}
