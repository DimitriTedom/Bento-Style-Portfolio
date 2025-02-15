import AppRoutes from "./Routes/Routes";
import "./index.css";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  </React.StrictMode>
);
