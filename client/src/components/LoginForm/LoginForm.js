import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// -----------------------------------------------------------------------------------------------------------------------
// import { Form, FormControl, FormGroup, ControlLabel, Checkbox, Col, Button } from "react-bootstrap";
// --!!! Delete if "react-bootstrap" not implemented, as well as code block mentioned below with "FormGroup"s etc...--!!
// ------------------------------------------------------------------------------------------------------------------------
import './LoginForm.css';

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
        //--------------------------------------------------------------
        // --!! Delete from above comment if not implemented !!--
        // --!! Left off converting the below "FormGroup" --!! 
        // -------------------------------------------------------------
        //  <Form id="login-form" horizontal>
        //   <FormGroup>
        //     <Col componentClass={ControlLabel} sm={2}></Col>
        //     <Col sm={10}>
        //       <FormControl type="text"
        //           className="form-input"
        //           name="username"
        //           placeholder="Username"
        //           value={this.state.username}
        //           onChange={this.handleChange}/>
        //     </Col>
        //   </FormGroup>

        //   <FormGroup>
        //     <Col componentClass={ControlLabel} sm={2}></Col>
        //     <Col sm={10}>
        //       <FormControl type="password" placeholder="Password" />
        //     </Col>
        //   </FormGroup>

        //   <FormGroup>
        //     <Col smOffset={2} sm={10}>
        //       <Checkbox>Remember me</Checkbox>
        //     </Col>
        //   </FormGroup>

        //   <FormGroup>
        //     <Col smOffset={2} sm={10}>
        //       <Button type="submit">Sign in</Button>
        //     </Col>
        //   </FormGroup>
        // </Form>
        // -----------------------------------------------------
        
        <div id="login-form" className="col-6">         
            <div className="page-header">
                <h3>Login</h3>
            </div>
          <form className="form-horizontal">
            {/* <div className="form-group"> */}
              {/* <div className="col-1 col-ml-auto">
                <label htmlFor="username" className="form-label">
                  Username:{" "}
                </label>
              </div> */}
              <div className="form-group row">
                <input type="text" className="form-input col-sm-6 col-form-label" name="username" placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange} />
              </div>
            {/* </div> */}
            {/* <div className="form-group"> */}
              {/* <div className="col-1 col-ml-auto">
                <label htmlFor="password" className="form-label">
                  Password:{" "}
                </label>
              </div> */}
              <div className="form-group row">
                <input type="password" className="form-input col-sm-6 col-form-label" name="password" placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange} />
              </div>
            {/* </div> */}
            <div className="form-group row">
              <button className="btn btn-secondary" onClick={this.handleSubmit} type="submit">Login</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm
