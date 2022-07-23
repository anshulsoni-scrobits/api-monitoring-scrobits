import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import {Router ,Route, useNavigate} from "react-router-dom";




  function ServerStatus() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/Project');
    };

    const navigateHome = () => {
      // 👇️ navigate to /Home
      navigate('/');
    };

    return (
      <div className="ServerStatus ">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <h3 id="servertext">Server Status</h3>
        <div id="status1">
          <div className="Input">
            <p>5</p>
          </div>
          <div className="StatusText">
            <p>Running</p>
          </div>
        </div>
        <div id="status2">
          <div className="Input">
            <p>5</p>
          </div>
          <div className="StatusText">
            <p>unhealthy</p>
          </div>
        </div>
        <div id="status3">
          <div className="Input">
            <p>5</p>
          </div>
          <div className="StatusText">
            <p>Halted</p>
          </div>
        </div>
        <div id="status4">
          <div className="Input">
            <p>5</p>
          </div>
          <div className="StatusText">
            <p>SSL Expired</p>
          </div>
        </div>
        <button
          onClick={navigateToContacts}
          type="button"
          id="buttonAddProject"
        >
          Add Project
        </button>
        </div>
      
    );
  }

export default ServerStatus;
