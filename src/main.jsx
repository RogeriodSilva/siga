import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "@/views/App";
import "./default.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container mx-auto p-4">
      <App />
    </main>
  </React.StrictMode>,
);
