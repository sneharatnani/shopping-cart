import { Link } from "react-router-dom";
import bg from "../assets/bg.png";

export default function Home() {
  return (
    <div className="h-[90vh]">
      <div className="m-auto lg:w-[80vw]">
        <section className="absolute left-[10%] top-[57%] font-black capitalize md:top-2/3 lg:top-1/3">
          <h1 className="text-white text-5xl mb-10 md:text-7xl">
            style and
            <span className="text-lime-300 lg:block"> comfort </span>
            together
          </h1>
          <Link
            to="/shop"
            className="bg-button-gradient py-5 px-9 rounded-full text-2xl"
          >
            Shop Now
          </Link>
        </section>
        <img
          src={bg}
          alt="green and white shoe"
          className="absolute rotate-330 top-[16vh] right-[9vw] lg:h-2/3"
        />
      </div>
    </div>
  );
}
