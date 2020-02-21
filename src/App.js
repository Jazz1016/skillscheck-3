import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";
import { withRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === "/" ? (
        <div className="routes">{routes}</div>
      ) : (
        <>
          <Nav />
          {/* FLEXBOX REQUIREMENT BELOW */}
          <div className="routes">{routes}</div>
        </>
      )}
    </div>
  );
}

export default withRouter(App);
