import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, Routes, Switch,outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
  
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  
  root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/Dashboard" element={ <navigaete replace to = "/HeaderAndSlide" />}>
          <Route path="Dashboard" element={< StatusAndTable/>}/>
          <Route path="Project" element={< Form/>}/>
        </Route>
        {/* <Route exact path="/Project" element={<navigaete replace to = "/Project" />} /> */}
      </Routes>
    </BrowserRouter>
  );