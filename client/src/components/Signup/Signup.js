import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
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
    console.log(`Signup handleSubmit, username: ${this.state.username}`);
    e.preventDefault();

    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res); // Delete after successful test
        if (!res.data.errmsg) {
          console.log("Success!");
          this.setState({
            redirectTo: "/login"
          });
        } else {
          console.log("Username already taken.");
        }
      })
      .catch(err => {
        console.log(`Signup Error: ${err}`);
      });
  }

  render() {
    return (
      <div className="SignupForm">
        <h4>Sign Up</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml auto">
              <label htmlFor="username">Username: </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label htmlFor="password" className="form-lable">
                Password:
              </label>
            </div>
            <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <div className="col-7">
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;