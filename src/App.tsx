import React from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./Desktop";
import "./styles.css";

const App = () => (
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
