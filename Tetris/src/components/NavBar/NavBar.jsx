import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/Game">
          <button className="GameButton">
            <a>Start the game!</a>
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutAuthor">
          <a className="normalLink">About Author</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
    </nav>
  );
}
