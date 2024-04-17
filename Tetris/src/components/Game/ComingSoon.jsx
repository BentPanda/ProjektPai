import { Link } from "react-router-dom";
import React from "react";
import "./ComingSoon.scss";

export default function ComingSoon() {
  return (
    <article>
      <header>
        <h3>ComingSoon</h3>
        <Link to={"/"}>Back to Home</Link>
      </header>
    </article>
  );
}
