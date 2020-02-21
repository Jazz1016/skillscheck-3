import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
