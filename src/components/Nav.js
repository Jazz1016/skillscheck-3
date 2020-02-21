import React from "react";
import { Link } from "react-router-dom";
import "./Nav-Auth.css";
import { connect } from "react-redux";
import { logout } from "../redux/Reducer";
import axios from "axios";

function Nav(props) {
  const logout = () => {
    axios.post("/api/logout").then(() => {
      props.logout();
      props.history.push("/");
    });
  };
  return (
    <div className="flexbox-requirement">
      Nav.js
      <Link to="/dash">
        <section>Home</section>
      </Link>
      <Link to="/new">
        <section>New Post</section>
      </Link>
      <Link to="/">
        <button onClick={() => logout()}>Logout</button>
      </Link>
    </div>
  );
}

export default connect(null, { logout })(Nav);
