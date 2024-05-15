import { Link } from "react-router-dom";
import React from "react";
import "./AboutAuthor.scss";

export default function AboutAuthor() {
  return (
    <article>
      <header>
        <h3>Mathew Delrio is a really cool guy :D</h3>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <section>
        <p>TheAuthor</p>
      </section>
    </article>
  );
}
