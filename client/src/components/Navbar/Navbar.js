import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import NavbarStyles from '../../styles/NavbarStyles';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';


class MainNavbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
      <div>
        <MediaQuery query={'(min-device-width: 500px)'}>
        <Navbar className="nav-bar" style={NavbarStyles.appHeader} dark expand="md">
        <img src={require('../../../src/logo.svg')} style={NavbarStyles.appLogo} alt="logo"/>
          <NavbarBrand href="/"><strong>Epic Produce</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <div>
            {loggedIn ? (
            <Nav navbar className="navbar-section">
              <NavItem>
                <NavLink
                  href="#"
                  className=""
                  onClick={this.logout} >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
            ) : (
            <Nav className="" navbar>
              <NavItem>
                <NavLink className="ml-3" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ml-3" href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ml-3" href="/signup">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ml-3" href="/products">Our Products</NavLink>
              </NavItem>             
            </Nav>
            )}
          </div>
          </Collapse>
        </Navbar>
        </MediaQuery>
      <MediaQuery query={'(max-device-width: 500px)'}>
          <Navbar dark expand="md">
          <img src={require('../../../src/logo.svg')} style={NavbarStyles.appLogo} alt="logo"/>
            <NavbarBrand href="/"><strong>Epic Produce</strong></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <div>
              {loggedIn ? (
              <Nav navbar className="navbar-section">
                <NavItem>
                  <NavLink
                    href="#"
                    className=""
                    onClick={this.logout} >
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
              ) : (
              <Nav className="" navbar>
                <NavItem>
                  <NavLink className="ml-3" href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="ml-3" href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="ml-3" href="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="ml-3" href="/products">Our Products</NavLink>
                </NavItem>             
              </Nav>
              )}
            </div>
            </Collapse>            
          </Navbar>
        </MediaQuery>
      </div>
    );
  }
}

export default MainNavbar;
