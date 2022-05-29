import * as React from "react";
import "./styles.css";

export default function Login() {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-title">Login</div>
        <div className="instruction">
          Please enter your Login and your Password
        </div>
        <input type="text" placeholder="Username" />
        <br></br>
        <input type="password" placeholder="Password" />
        <br></br>
        <button className="login-button">Login</button>
        <div className="create-account">Create Account</div>
      </div>
    </div>
  );
}
