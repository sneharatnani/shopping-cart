import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles.css";
import { CartContextProvider } from "./CartContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/shopping-cart">
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>
);
