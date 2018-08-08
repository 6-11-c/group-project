import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import LoginFormStyles from '../../styles/LoginFormStyles';
import MediaQuery from 'react-responsive';

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
      .post("/user/signup", {
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
      <div>

    {/* Desktop Responsiveness   */}
      <MediaQuery query={'(min-device-width: 500px)'}>
      <Form className='form-group pl-5 mt-5' style={LoginFormStyles.loginForm}>
      <h2 className='form-row pb-3'>Signup</h2>
        <FormGroup className='form-row pb-2'>
          <Input 
            className='bg-dark text-white' 
            type='username' 
            name='username' 
            placeholder='Awesome Username Here'
            value={this.state.username}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup className='form-row pb-2'>
          <Input  
            className='bg-dark text-white' 
            type='password' 
            name='password' 
            placeholder='Secret Password Here'
            value={this.state.password}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormText color='light'>You're SO close!!!! Click below me and you're all set!</FormText>
        </FormGroup>
        <FormGroup className='form-row pt-3'>
          <Button 
            type='submit' 
            color='success' 
            onClick={this.handleSubmit}>Sign Me Up Scotty!</Button> 
        </FormGroup>
      </Form>
      </MediaQuery>

    {/* Mobile Responsiveness */}
      <MediaQuery query={'(max-device-width: 500px)'}>
      <Form className='form-group mt-5 mx-auto' style={LoginFormStyles.loginForm}>
      <h2 className='form-row pb-3'>Signup</h2>
        <FormGroup className='form-row pb-2'>
          <Input 
            className='bg-dark text-white' 
            type='username' 
            name='username' 
            placeholder='Awesome Username Here'
            value={this.state.username}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup className='form-row pb-2'>
          <Input  
            className='bg-dark text-white' 
            type='password' 
            name='password' 
            placeholder='Secret Password Here'
            value={this.state.password}
            onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormText color='light'>You're SO close!!!! Click below me and you're all set!</FormText>
        </FormGroup>
        <FormGroup className='form-row pt-3'>
          <Button 
            type='submit' 
            color='success' 
            onClick={this.handleSubmit}>Sign Me Up Scotty!</Button> 
        </FormGroup>
      </Form>
      </MediaQuery>

      </div>
    );
  }
}

export default Signup;