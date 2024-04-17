import React from "react";
import "./Home.scss";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <div className="Home">
      <NavBar />
      <h1>Tetris!</h1>
      <p>By Matteo.</p>
    </div>
  );
}
