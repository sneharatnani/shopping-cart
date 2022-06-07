import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles.css";
import store from "./store/index.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/shopping-cart">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
