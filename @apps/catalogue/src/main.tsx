import React from "react";
import ReactDOM from "react-dom/client";
import Catalogue from "./Catalogue";

import "@common/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Catalogue />
  </React.StrictMode>
);
