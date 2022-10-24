import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MusicContextProvider } from "./context/MusicContext";
import { PaginationContextProvider } from "./context/PaginationContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MusicContextProvider>
      <PaginationContextProvider>
        <App />
      </PaginationContextProvider>
    </MusicContextProvider>
  </React.StrictMode>
);
