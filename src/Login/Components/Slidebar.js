import React from "react";
import DashBoard from "../Images/DashBoard.svg";
import AddProject from "../Images/AddProject.svg";
import SignOut from "../Images/SignOut.svg";
import { Router, Route, useNavigate } from "react-router-dom";

function Slidebar() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /project page
    navigate("/Project");
  };

  const navigateHome = () => {
    // 👇️ navigate to /Home page
    navigate("/");
  };

  const navigateToDashboard = () => {
    // 👇️ navigate to /DashBoard page
    navigate("/Dashboard");
  };
  return (
    <div>
      <div className="Scroits">
        <img src="" alt="" />
      </div>
      <div className="Slidebar">
        <div>
          <div className="Vector" id="Vector1">
            <img src={DashBoard}></img>
          </div>
          <button type="button" onClick={navigateToDashboard} className="SlideBarOption1">
            DashBoard
          </button>
          <div className="Vector" id="Vector2">
            <img src={AddProject}></img>
          </div>
          <button
            onClick={navigateToContacts}
            type="button"
            className="SlideBarOption2"
          >
            Add Project
          </button>

          <div className="Vector" id="Vector3">
            <img src={SignOut}></img>
          </div>
          <button type="button" className="SlideBarOption3">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
} /* className="SlideBarOption1" */

export default Slidebar;
