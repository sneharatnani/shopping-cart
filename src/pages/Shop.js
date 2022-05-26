import Card from "../components/Card.js";
import productData from "../assets/products/productData.js";

export default function Shop() {
  const shoeCards = productData.map((shoe) => <Card key={shoe.id} {...shoe} />);

  return (
    <main className="grid md:grid-cols-3 justify-items-center mt-8 gap-y-8 text-center">
      {shoeCards}
    </main>
  );
}
