import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const LightMode = {
  color: "#000",
  backgroundColor: "#eee",
};
const DarkMode = {
  color: "#eee",
  backgroundColor: "#555",
};

root.render(
  <ThemeProvider theme={DarkMode}>
    <App />
  </ThemeProvider>
);
