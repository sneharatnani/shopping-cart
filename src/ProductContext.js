import { createContext, useState } from "react";

const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [productInfo, setProductInfo] = useState("");

  function updateInfo(newProduct) {
    setProductInfo(newProduct);
  }

  return (
    <ProductContext.Provider value={{ productInfo, updateInfo }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
