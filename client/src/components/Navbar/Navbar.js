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

      {/* Desktop Responsiveness */}
        <MediaQuery query={'(min-device-width: 500px)'}>
        <Navbar style={NavbarStyles.appNav} expand="md">
        <img href="/" src={require('../../../src/lemon-solid.svg')} style={NavbarStyles.appLogo} alt="logo"/>
          <NavbarBrand className="text-light ml-2" href="/">Epic Produce</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-light ml-3" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light ml-3" href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light ml-3" href="/signup">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light ml-3" href="/products">Our Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart">
                <img src={require('../../../src/shopping-cart-solid.svg')} style={NavbarStyles.appCart} alt="logo"/>
                </NavLink>
              </NavItem>
            </Nav>
            )}
          </Collapse>
        </Navbar>
        </MediaQuery>

      {/* Mobile Responsiveness */}
        <MediaQuery query={'(max-device-width: 500px)'}>
          <Navbar style={NavbarStyles.mobileNavbar} dark>
            <img src={require('../../../src/lemon-solid.svg')} style={NavbarStyles.appLogo} color="white" alt="logo"/>
            <NavbarBrand className="text-light" href="/"><strong>Epic Produce</strong></NavbarBrand>
            <NavLink href="/cart">
              <img src={require('../../../src/shopping-cart-solid.svg')} style={NavbarStyles.appCart} alt="logo"/>
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
                  <NavLink className="text-light" href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" href="/signup">Signup</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" href="/products">Our Products</NavLink>
                </NavItem>             
              </Nav>
              )}
            </Collapse>            
          </Navbar>
        </MediaQuery>
      </div>
    );
  }
}

export default MainNavbar;

