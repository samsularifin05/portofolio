import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
Aos.init({ duration: 1200 });
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
