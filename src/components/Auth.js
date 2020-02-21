import React from "react";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs() {}

  handleLogin = () => {};

  handleRegister = () => {};

  render() {
    return <div>Auth.js</div>;
  }
}
