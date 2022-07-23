import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Route, Routes, } from "react-router-dom";
import Project from "./Project";
import Dashboard from "./Dashboard";
import App from "./Login/App";
import Form from "./Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/Dashboard" element={< Dashboard/>} />
      <Route exact path="/Project" element={< Project />} />
    </Routes>
  </BrowserRouter>
);
