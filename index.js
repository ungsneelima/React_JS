import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const htmlRoot = document.getElementById("root");
const rootReact = createRoot(htmlRoot);

rootReact.render(
    <App />
);
