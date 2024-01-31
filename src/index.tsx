import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);
