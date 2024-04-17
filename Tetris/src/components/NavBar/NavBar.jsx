import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav>
      <li>
        <NavLink to="/">
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/AboutAuthor">
          <a>AboutAuthor</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/Game">
          <a>ComingSoon</a>
        </NavLink>
      </li>
    </nav>
  );
}
