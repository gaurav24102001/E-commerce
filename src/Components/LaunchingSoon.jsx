import React from "react";
import logo from "../images/Jigiriz-light.png";
import './LaunchingSoon.css'
import dropdown from "../images/dropdown.png";

export default function LaunchingSoon() {
  return (
    <div className="launching-soon">
      <div>
      <img className="logo" src={logo} />
      </div>
     <div className="leaf">
       <p className="leaf-text">Jigiriz</p>
     </div>
      <div className="launching-soon-text">
        <h1>Launching <br /> soon!</h1>
        <p>We are currently making some <br />improvements to our website!</p>
      </div>
      <img className="dropdown" src={dropdown} />
    </div>
  );
}