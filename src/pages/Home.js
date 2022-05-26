import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link to="/shop">shop now</Link>
    </div>
  );
}
