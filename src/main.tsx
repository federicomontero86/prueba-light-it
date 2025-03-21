/// <reference types="vite/client" />

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import App from "./App.tsx";
import { PatientProvider } from "./contexts/PatientContext/PatientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PatientProvider>
      <App />
      <ToastContainer />
    </PatientProvider>
  </StrictMode>
);
