import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import App2 from "./App2";

ReactDOM.render(
  <React.StrictMode>
    <App2/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
