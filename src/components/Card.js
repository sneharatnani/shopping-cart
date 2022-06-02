import { Link } from "react-router-dom";

export default function Card(props) {
  const { url, price, title, id } = props;
  return (
    <div className="w-4/5 md:w-60 shadow-lg">
      <Link to={`/shop/${id}`}>
        <img src={url} alt="a Shoe" />
      </Link>
      <p className="font-bold pb-2 pt-4 font-heading">{title}</p>
      <p className="pb-4">₹{price}</p>
    </div>
  );
}
