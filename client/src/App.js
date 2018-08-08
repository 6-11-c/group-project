import React, { Component } from "react";
import { Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import LoginForm from "./components/LoginForm/LoginForm";
import MainNavbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Products/Products";
import Cart from "./components/Cart/Cart";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    return (
      <div className="App">
        <MainNavbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
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
        <Route
          exact
          path="/products"
          render={() => <Product />}
        />
        <Route
          exact
          path="/cart"
          render={() => <Cart />}
        />
      </div>
    );
  }
}

export default App;
