import Card from "../components/Card.js";
import productData from "../assets/products/productData.js";

export default function Shop() {
  const shoeCards = productData.map((shoe) => <Card key={shoe.id} {...shoe} />);

  return (
    <main className="min-h-[80vh] bg-white">
      <div className="grid justify-items-center py-8 gap-y-8 text-center md:grid-cols-3 2xl:w-[64rem] mx-auto">
        {shoeCards}
      </div>
    </main>
  );
}
