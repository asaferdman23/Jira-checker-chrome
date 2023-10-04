import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 120dp;
  height: 120dp;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  border-radius: 3px;
  layout-block_-_display: block;
  z-index: 999999999;
  }
`;
document.body.appendChild(rootElement);
document.body.appendChild(globalStyles);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);