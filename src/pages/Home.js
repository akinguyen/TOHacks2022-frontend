import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../states/Provider";
export default function Home() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context);

  if (!state.isLoggedIn) {
    window.location.href = "/login";
    return undefined;
  }

  return (
    <div className="home-background">
      <div className="nav-bar">
        <div>Helping Pop Up Businesses Thrive During Pandemic</div>
        <button>Log Out</button>
      </div>
    </div>
  );
}
