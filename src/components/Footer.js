export default function Footer() {
  return (
    <footer className="text-center py-2 text-white bg-gray-800">
      <p>
        Crafted with<span> ❤ </span>
        By{" "}
        <a
          href="https://github.com/sneharatnani"
          target="_blank"
          className="font-bold hover:text-lime-300"
        >
          Sneha Ratnani
        </a>
      </p>
      <p>
        Image Credits:{" "}
        <a
          href="https://www.nike.com/in/"
          target="_blank"
          className="text-lime-300 underline"
        >
          nike.com
        </a>
      </p>
    </footer>
  );
}
