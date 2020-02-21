import React from "react";
import { Link } from "react-router-dom";
import "./Nav-Auth.css";

function Nav() {
  return (
    <div className="flexbox-requirement">
      Nav.js
      <Link to="/dash">
        <section>Home</section>
      </Link>
      <Link to="/new">
        <section>New Post</section>
      </Link>
    </div>
  );
}

export default Nav;
