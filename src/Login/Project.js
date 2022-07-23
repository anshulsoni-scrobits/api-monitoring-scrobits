import "./styles.css";
import Header from "./Components/Header";
import Slidebar from "./Components/Slidebar";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";
import "./index.css";
export default function Project() {
  return (<div>
    <Slidebar />
    <Header />
      <Form />
    </div>
  );
}
