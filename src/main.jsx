import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
