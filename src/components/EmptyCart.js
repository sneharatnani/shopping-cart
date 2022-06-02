import StyledLink from "./StyledLink.js";

export default function EmptyCart() {
  return (
    <div
      className="text-gray-800 w-full px-2 text-center absolute left-1/2 top-1/2 transform 
        -translate-x-1/2 -translate-y-1/2"
    >
      <p className="font-black text-3xl">Your Shopping Cart Is Empty</p>
      <p className="mb-8 mt-4 text-gray-500">
        It's a good day to buy something you want!
      </p>
      <StyledLink path="shop">Continue Shopping</StyledLink>
    </div>
  );
}
