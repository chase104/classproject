
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PrimaryContextProvider from "./contexts/PrimaryContext.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimaryContextProvider>
      <Router>
        <App />
      </Router>
    </PrimaryContextProvider>
  </React.StrictMode>
);

