import React from "react";
// import image from "./img/image.png";
// import image from "./img/image2.png";

const Navbar = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="Navigate">
        <div className="Image">
          {/* <img src={image} alt="" /> */}
        </div>
        <h1 id="nav_heading">API Monitoring Web-app</h1>
        <div className="Image2">
          {/* <img src={image2} alt="" /> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
