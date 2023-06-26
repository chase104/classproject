import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PrimaryContextProvider from "./contexts/PrimaryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimaryContextProvider>
      <App />
    </PrimaryContextProvider>
  </React.StrictMode>
);
