import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link
        to="/shop"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 capitalize z-20 text-white p-3 opacity-70 text-lg border"
      >
        shop now
      </Link>
      {/* <div className="fixed z-10 top-[10vh] bottom-0 left-0 right-0 w-full h-[90vh] bg-black opacity-50"></div> */}
    </div>
  );
}
