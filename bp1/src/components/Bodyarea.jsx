import React from "react";
import amazon from "./src/assets/amazon.png";
import flipkart from "./src/assets/flipkart.png";
import heropage from "./src/assets/hero-image.png";

const Bodyarea = () => {
  return (
    <div className="secondary-div">
      <div className="text-div">
        <p className="p1">YOUR FEET DESERVE THE BEST</p>
        <p className="p2">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button-div">
          <button className="btn-1">Shop Now</button>
          <button className="btn-2">Category</button>
        </div>
        <div className="web-redirect-logo">
          <p>Also available on</p>
          <div className="logos">
            <img src={amazon} className="amazon-logo" />
            <img src={flipkart} className="flipkart-logo" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="pic-div">
        <img src={heropage} className="hero-img" />
      </div>
    </div>
  );
};

export default Bodyarea;
