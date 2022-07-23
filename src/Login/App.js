import { useState, useEffect } from "react";
import "./App.css";
import logo from "./img/scrobit.png";
import { Router, Route, useNavigate } from "react-router-dom";
let vari;



function App() {
  const navigate = useNavigate();
  
  function demo() {
    // console.log("hello");

    var mail1 = document.getElementById('mail').value;
    var pass1 = document.getElementById('pass').value;
    
    const url = "https://api-monitor.scrobits.com/api/v1/login";
    let data = `{"password": ${pass1} ,"email" : ${mail1} }`;
    data = JSON.parse(data);
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "*/*" },
      body: data,
    };
    fetch(url, params)
    .then(async (res)=>{
      if (res.status===200){
        const response = await res.json()
        // window.location.href = "/Dashboard";
        console.log(response);
        return data;
      }
      
    })
    .catch(err => console.log(err))
    // return data;
  }
  

  const navigateToDashboard = () => {
    let data;

    data = demo();
    
    navigate("/Dashboard");
  };

  const navigateHome = () => {
    navigate("/");
  };
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
        <form method="post">
          {/* Login heading */}
          <h1>LOGIN</h1>
          {/* First text box (username) */}

          <div class="txt_field">
            <input type="email" required id="mail"></input>
            <span></span>
            <label>email</label>
          </div>

          {/* Second text box (Password) */}
          <div class="txt_field">
            <input type="password" required id="pass"></input>
            <span></span>
            <label>password</label>
          </div>
          <br></br>

          {/* Login Button */}
          <div className="btn-divv">
            <button onClick={demo} className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
