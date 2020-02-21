import React from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/Reducer";
import axios from "axios";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin = (username, password) => {
    axios
      .post(`/api/auth/login`, {
        username: username,
        password: password
      })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dash");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRegister = () => {
    axios
      .post(`/api/auth/register`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dash");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <section>
          <h1>login</h1>
          <input
            // value={this.state.username}
            name="username"
            placeholder="username"
            onChange={e => this.handleInputs(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            // value={this.state.password}
            onChange={e => this.handleInputs(e)}
          />
          <button
            onClick={() => {
              this.handleLogin(this.state.username, this.state.password);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              this.handleRegister(this.state.username, this.state.password);
            }}
          >
            Register
          </button>
        </section>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
