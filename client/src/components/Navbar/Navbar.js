import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    console.log("Logging out!"); // Delete after tests successful
    axios
      .post("/user/logout")
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(err => {
        console.log(`Logout Error: ${err}`);
      });
  }
  render() {
    const loggedIn = this.props.loggedIn;
    console.log(`navbar rendered, props: ${this.props.loggedIn}`);

    return (
      <div id="nav-bar">
        <header className="navbar App-header" id="nav-container">
        <div className="col-4 col-mr-auto">
            <div id="top-filler"></div>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Food App</h1>
          </div>
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <Link
                  to="#"
                  className="btn btn-link text-white"
                  onClick={this.logout}>
                  <span className="text-white">Logout</span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-dark">
                  <span className="text-light">Home</span>
                </Link>
                <Link to="/login" className="btn btn-link text-dark">
                  <span className="text-light">Login</span>
                </Link>
                <Link to="/signup" className="btn btn-link text-dark">
                  <span className="text-light">Signup</span>
                </Link>
              </section>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
