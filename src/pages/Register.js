import React, { useState, useContext } from "react";
import "./styles.css";
import leftImage from "./left-image.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../states/Provider";

export default function Register() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onCreateAccount = () => {
    axios
      .post("https://tohack-2022.herokuapp.com/users/register", {
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
        alert("Username already exists");
      });
  };

  return (
    <div className="register-background">
      <div className="register-image-container">
        <img src={leftImage} alt="Brainstorm" />
      </div>
      <div className="register-container">
        <div className="register-title">Sign Up</div>
        <div className="register-instruction">Get started absolutely free</div>
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
        <button className="register-button" onClick={onCreateAccount}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
