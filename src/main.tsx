import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Cursor } from "@shared/ui/Cursor/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Cursor />
    <App />
  </Provider>
);
