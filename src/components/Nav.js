import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
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
