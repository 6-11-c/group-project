import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import LoginForm from "./components/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }
  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(res => {
      console.log(`GET User Response: ${res.data}`);
      if (res.data.user) {
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup />}
        />
      </div>
    );
  }
}

export default App;