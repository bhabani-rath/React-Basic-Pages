import React from "react";
import logo from "./src/assets/brand_logo.png";

const Navigation = () => {
  return (
    <>
      <div className="main-container">
        <nav className="nav-container">
          <img src={logo} />
          <ul className="nav-url">
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>
          <button type="submit" className="login">
            Login
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
