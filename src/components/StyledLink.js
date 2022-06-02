import { Link } from "react-router-dom";

export default function StyledLink(props) {
  return (
    <Link
      to={`/${props.path}`}
      className="bg-button-gradient py-5 px-9 rounded-full text-2xl font-black hover:text-gray-700"
    >
      {props.children}
    </Link>
  );
}
