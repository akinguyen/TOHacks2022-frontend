import * as React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div className="background">
      <div className="mainContainer">
        <div className="loginTitle">Login</div>
        <div className="instruction">
          Please enter your Login and your Password
        </div>
        <input type="text" placeholder="Username" />
        <br></br>
        <input type="password" placeholder="Password" />
        <br></br>
        <button className="loginButton">Login</button>
        <div className="create-account">Create Account</div>
      </div>
    </div>
  );
}
