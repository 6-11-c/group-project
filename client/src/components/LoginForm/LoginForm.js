import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Input, FormText, Badge } from 'reactstrap';
import LoginFormStyles from '../../styles/LoginFormStyles';
import MediaQuery from 'react-responsive';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
      loggedIn: false
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
          // this.props.updateUser({
          //   loggedIn: true,
          //   username: res.data.username
          // });
          // this.setState({
          //   redirectTo: "/"
          // });
          localStorage.setItem("auth_token", res.data.token);
          window.location.href = "/";
          this.setState({ loggedIn: true });
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

    {/* Desktop Responsiveness     */}
      <MediaQuery query={'(min-device-width: 500px)'}>
      <Form className='form-group pl-5 mt-5' style={LoginFormStyles.loginForm}>
      <h2 className='form-row pb-3'>Login</h2>
        <FormGroup className='form-row pb-2'>
          <Input 
            className='bg-dark text-white' 
            type='username' 
            name='username' 
            placeholder='Good Ol Username'
            value={this.state.username}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup className='form-row pb-2'>
          <Input  
            className='bg-dark text-white' 
            type='password' 
            name='password' 
            placeholder='Secret Password'
            value={this.state.password}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup check>
          <FormText className='form-row pb-1' color='light'>
            <Input type='checkbox' />Don't Forget me next time {' '}
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormText color='light'>Not signed up yet?!? How Dare you!</FormText>
          <Badge href='/Signup' color='danger'>Sign Up!</Badge>
        </FormGroup>
        <FormGroup className='form-row pt-3'>
          <Button 
            type='submit' 
            color='success' 
            onClick={this.handleSubmit}>Login</Button> 
        </FormGroup>
      </Form>
      </MediaQuery>

    {/* Mobile Responsiveness */}
      <MediaQuery query={'(max-device-width: 500px)'}>
      <Form className='form-group mt-5 mx-auto' style={LoginFormStyles.loginForm}>
      <h2 className='form-row pb-3'>Login</h2>
        <FormGroup className='form-row pb-2'>
          <Input 
            className='bg-dark text-white' 
            type='username' 
            name='username' 
            placeholder='Good Ol Username'
            value={this.state.username}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup className='form-row pb-2'>
          <Input  
            className='bg-dark text-white' 
            type='password' 
            name='password' 
            placeholder='Secret Password'
            value={this.state.password}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup check>
          <FormText className='form-row pb-1' color='light'>
            <Input type='checkbox' />Don't Forget me next time {' '}
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormText color='light'>Not signed up yet?!? How Dare you!</FormText>
          <Badge href='/Signup' color='danger'>Sign Up!</Badge>
        </FormGroup>
        <FormGroup className='form-row pt-3'>
          <Button 
            type='submit' 
            color='success' 
            onClick={this.handleSubmit}>Login</Button> 
        </FormGroup>
      </Form>
      </MediaQuery>
      </div>
      );
    }
  }
}

export default LoginForm;
