import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const pathname = window.location.pathname;

// Se a rota começar com /wp-admin ou /wp-login, não renderiza o React
if (
  pathname.startsWith("/wp-admin") ||
  pathname.startsWith("/wp-login") ||
  pathname.startsWith("/wpmt/wp-admin") ||
  pathname.startsWith("/wpmt/wp-login")
) {
  console.warn("Rota administrativa detectada — React ignorado.");
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
