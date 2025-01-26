import { scan } from "react-scan";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalErrorBoundary from "./GlobalErrorBoundary";

if (typeof window !== "undefined") {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <GlobalErrorBoundary>
    <App />
  </GlobalErrorBoundary>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
