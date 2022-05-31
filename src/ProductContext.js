import { createContext, useState } from "react";

const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [productInfo, setProductInfo] = useState([]);

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductContextProvider };
