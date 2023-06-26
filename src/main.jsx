
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PrimaryContextProvider from "./contexts/PrimaryContext.jsx";

import { BrowserRouter as Router } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimaryContextProvider>
      <Router>
        <App />
      </Router>
    </PrimaryContextProvider>
  </React.StrictMode>
);

