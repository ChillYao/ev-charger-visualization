import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./application/Application.tsx";
import GlobalStyle from "./GlobalStyle.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
