import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IsLoggedInProvider } from "./context/isLoggedInContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsLoggedInProvider>
      <App />
    </IsLoggedInProvider>
  </React.StrictMode>
);
