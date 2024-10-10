import React from "react";
import "./navi.css";
const Navi = () => {
  return (
    <div className="nav">
      <div>
        <nav>
          <ul>
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="image">
        <img src="logo192.png"></img>
      </div>
    </div>
  );
};

export default Navi;
