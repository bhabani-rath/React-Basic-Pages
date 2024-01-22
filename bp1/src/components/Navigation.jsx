import React from "react";

const Navigation = () => {
 return (
  <>
   <div className="main-container">
    <nav className="nav-container">
     <img src="./src/assets/brand_logo.png" />
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
