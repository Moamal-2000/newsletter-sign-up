import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EmailContextProvider from "./Context/emailContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailContextProvider>
      <App />
    </EmailContextProvider>
  </React.StrictMode>
);
