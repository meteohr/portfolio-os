import React from "react";
import ReactDOM from "react-dom/client";
import { Desktop } from "./Desktop";
import "./styles.css";

const App = () => (
  <React.StrictMode>
    <div>
      <Desktop />
    </div>
  </React.StrictMode>
);

// Mount component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
