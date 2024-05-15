import React from "react";
import { useNavigate } from "react-router-dom";
import "./PauseScreen.scss";

function PauseScreen({ isPaused, onResume }) {
  const navigate = useNavigate();

  if (!isPaused) return null;

  return (
    <div className="pause-overlay">
      <div className="pause-screen">
        <h2>Game has been paused</h2>
        <button onClick={onResume}>Resume</button>
        <button onClick={() => navigate("/")}>Return to Home</button>
      </div>
    </div>
  );
}

export default PauseScreen;
