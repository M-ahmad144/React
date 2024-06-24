// src/main.js (or wherever your entry point is)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import storeCounter from "./Store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeCounter}>
      <App />
    </Provider>
  </React.StrictMode>
);
