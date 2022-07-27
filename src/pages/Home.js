import bg from "../assets/bg.png";
import StyledLink from "../components/StyledLink.js";

export default function Home() {
  return (
    <div className="h-[90vh] 2xl:w-[64rem] 2xl:mx-auto 2xl:relative">
      <div className="m-auto lg:w-[80vw]">
        <section className="absolute left-[10%] top-[57%] font-black capitalize md:top-2/3 lg:top-1/3 2xl:top-48 2xl:left-0">
          <h1 className="font-heading text-white text-5xl mb-10 md:text-7xl 2xl:text-[5.5rem]">
            style and
            <span className="text-lime-300 lg:block"> comfort </span>
            together
          </h1>
          <StyledLink path="shop">Shop Now</StyledLink>
        </section>
        <img
          src={bg}
          alt="green and white shoe"
          className="absolute rotate-330 top-[16vh] right-[9vw] lg:h-2/3 2xl:h-[26rem] 2xl:right-0 2xl:top-32"
        />
      </div>
    </div>
  );
}
