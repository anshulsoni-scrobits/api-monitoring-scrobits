import { useState, useEffect } from "react";
import "./App.css";
import logo from "./img/scrobit.png";
import "./Dashboard";
import { Router, Route, useNavigate } from "react-router-dom";
import axios from "axios";

// globally declaring a variable
// let vari;

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("https://api-monitor.scrobits.com/api/v1/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        alert("successful")
        // localStorage.setItem('token', result.data.token)
        navigate('/Dashboard')
      })
      .catch((error) => {
        console.log(error);
        alert("not successful")

      });
  };
  // login page components
  return (
    // Left side Heading / para -
    <div className="container">
      <div className="para">
        <p className="para-under">API</p>
        <p className="para-under">MONITORING</p>
        <p className="para-under">PROJECT</p>
      </div>

      <div className="para-sec">
        <p>Powered By</p>
      </div>

      {/* Logo of scrobits */}
      <div className="picture">
        <img src={logo} className="logo" alt />
      </div>

      {/* Admin Login form  */}
      <div class="center">
        <form>
          {/* Login heading */}
          <h1>LOGIN</h1>
          {/* First text box (username) */}

          <div class="txt_field">
            <input
              type="email"
              required
              value={email}
              onChange={handleEmail}
            ></input>
            <span></span>
            <label>email</label>
          </div>

          {/* Second text box (Password) */}
          <div class="txt_field">
            <input
              type="password"
              required
              value={password}
              onChange={handlePassword}
            ></input>
            <span></span>
            <label>password</label>
          </div>
          <br></br>

          {/* Login Button */}
          <div className="btn-divv">
            <button onClick={handleApi} className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
