// Import from React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import CSS
import "./index.css";
// Import App
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
