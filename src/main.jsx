import { SideBarProvider } from "./context/navBarContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </React.StrictMode>,
);
