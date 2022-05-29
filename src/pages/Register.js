import * as React from "react";
import "./styles.css";
import leftImage from "./left-image.png";

export default function Register() {
  return (
    <div className="register-background">
      <div className="register-image-container">
        <img src={leftImage} />
      </div>
      <div className="register-container">
        <div className="register-title">Sign Up</div>
        <div className="register-instruction">Get started absolutely free</div>
        <input type="text" placeholder="Username" />
        <br></br>
        <input type="password" placeholder="Password" />
        <br></br>
        <button className="register-button">Sign Up</button>
      </div>
    </div>
  );
}
