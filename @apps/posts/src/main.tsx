import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./Posts";

import "@common/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>
);
