import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`Handle Submit: ${e}`);
    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(`Login Response: ${res}`);
        if (res.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            username: res.data.username
          });
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(err => {
        console.log(`Login Error: ${err}`);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label htmlFor="username" className="form-label">
                  Username:{" "}
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  type="text"
                  className="form-input"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-1 col-ml-auto">
                <label htmlFor="password" className="form-label">
                  Password:{" "}
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-7" />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm
