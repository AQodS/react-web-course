import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./dists/css/main.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
