import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
// import { FirstApp } from "./FirstApp";
// import { HelloWorldApp } from "./HelloWorldApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp /> */}
    <CounterApp value={4} />
  </React.StrictMode>
);
