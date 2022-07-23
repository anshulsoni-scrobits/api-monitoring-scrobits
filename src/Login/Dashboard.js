// Rushikesh

import Header from "./Components/Header";
import Slidebar from "./Components/Slidebar";
import ServerStatus from "./Components/ServerStatus";
import ContentTable from "./Components/ContentTable";
import { Route, Routes, Switch } from "react-router-dom";
// import App from './Project';
import Project from "./Project";
import "./index.css";

function dash() {
  return (
    <>
      {/* <Project />  */}
      <Slidebar />
      <Header />
      <ServerStatus />
      <ContentTable />
    </>
  );
}

export default dash;
