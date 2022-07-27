import Header from "./Components/Header";
import Slidebar from "./Components/Slidebar";
import ServerStatus from "./Components/ServerStatus";
import ContentTable from "./Components/ContentTable";
import React,{component, useEffect,useState} from 'react';
import "./index.css";

function Dash() {
  const[project,setProject]=useState([])
  const url="https://api-monitor.scrobits.com/api/v1/users/projects/8";
  useEffect(()=>{
         fetch(url,{method: 'get','Content-Type':'application/json'})
        .then(async (data)=>{
           setProject(await data.projects);
         })
         .catch((ERR)=>{
          console.log(ERR);
         })
  },[])
  return (
    <>
      <Slidebar />
      <Header />
      <ServerStatus />
      <ContentTable />
    </>
  );
}
export default Dash;


