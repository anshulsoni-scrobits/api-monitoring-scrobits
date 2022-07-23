import "./styles.css";
import Header from "./Components/Header";
import Slidebar from "./Components/Slidebar";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";
import Logo1 from './Images/Logo1.png'
import Logo2 from './Images/Logo2.png'

export default function Project() {
  return (<>
    <Header />
    <Slidebar />   
    <Form />
    </>
  );
}

