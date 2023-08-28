import { SideBarProvider } from "./context/navBarContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SideBarProvider>
  </React.StrictMode>,
);
