import React from "react";
import ReactDOM from "react-dom/client";
import "./resizable.css";
import ConfigApp from "./ConfigApp";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(<ConfigApp />);
