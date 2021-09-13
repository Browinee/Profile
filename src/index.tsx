import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { AuthProvider } from "./module/auth/context/auth-context";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import THEME from "./theme/theme";
import "./server";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
