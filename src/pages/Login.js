import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../states/Provider";
import "./styles.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    axios
      .post("https://tohack-2022.herokuapp.com/users/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch({
          type: "LOG_IN",
          userData: res.data,
        });
        navigate("/");
      })
      .catch(() => {
        alert("Username or password is incorrect");
      });
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-title">Login</div>
        <div className="instruction">
          Please enter your Login and your Password
        </div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
        <a className="create-account" href="/register">
          Create Account
        </a>
      </div>
    </div>
  );
}
