import React, { Component } from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';
import axios from 'axios';
import './Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button } from 'reactstrap';


class MainNavbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    //-----------------------------------------
    // Toggle for converting to Reactstrap
    //-----------------------------------------
    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };
    //------------------------------------------
  }
  //--------------------------------------------
  // Toggle function for converting to Reactstrap
  //--------------------------------------------
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }
  //--------------------------------------------

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

      //---------------------------------------------------------------
      // Converting to Reactstrap. Please check. 
      //---------------------------------------------------------------
      //---------------------------------------------------------------
      // <div>
      //   <Navbar className="navbar App-header" dark expand="md">
      //   <img src={logo} className="App-logo" alt="logo"/>
      //     <NavbarBrand href="/">Food App</NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //     <div>
      //       {loggedIn ? (
      //       <Nav navbar className="navbar-section">
      //         <NavItem>
      //           <NavLink
      //             href="#"
      //             className=""
      //             onClick={this.logout} >
      //             Logout
      //           </NavLink>
      //         </NavItem>
      //       </Nav>
      //       ) : (
      //       <Nav className="pl-5" navbar>
      //         <NavItem>
      //           <NavLink href="/">Home</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="/login">Login</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="/signup">Signup</NavLink>
      //         </NavItem>             
      //       </Nav>
      //       )}
      //     </div>
      //     </Collapse>            
      //         <Input
      //           className="w-25"
      //           type="search"
      //           name="search"
      //           placeholder="Search, do you dare? *yoda voice*"
      //           value="" />
      //         <Button
      //           className="ml-3"
      //           type="search"
      //           color="secondary" >Search!</Button>
      //   </Navbar>
      // </div>

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

export default MainNavbar;
