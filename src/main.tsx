import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Cursor } from "@shared/ui/Cursor/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Cursor />
    <App />
  </React.StrictMode>
);
