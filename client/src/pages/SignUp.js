import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import Login from "./Login";



class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    userCreated: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleInputChange = (event) => {
    const { name, value, } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    var userData = { name: this.state.name, email: this.state.email, password: this.state.password }
    console.log(userData);
    API.signUp(userData)
      .then(res => {
        this.setState({ userCreated: true });
      })
      .catch(err => console.log(err));
  };
  handleFormSubmitMail = (event) => {
    event.preventDefault();
    var userData = { name: this.state.name, email: this.state.email, password: this.state.password }
    API.noderMailer(userData)
      .then(res => {
        this.setState({ userCreated: true });
      })
      .catch(err => console.log(err));
    var userData = { name: this.state.name, email: this.state.email, password: this.state.password }
    console.log(userData);
  };
  submitBoth=(event)=>{
    this.handleFormSubmit(event)
    this.handleFormSubmitMail(event)
  }
  render() {
    if (this.state.userCreated) {
      return <Redirect to="./Login" />
    }
    return (
      <GFGContainer>
        <Form>
          <Form.Field>
            <GFGLabel>Name</GFGLabel>
            <GFGInput
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Enter your full name"
            />
          </Form.Field>
          <Form.Field>
            <GFGLabel>Email address</GFGLabel>
            <GFGInput
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="Enter your email"
            />
          </Form.Field>
          <Form.Field>
            <GFGLabel>Password</GFGLabel>
            <GFGInput
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Enter your password"
            />
          </Form.Field>
          <GFGButton
            disabled={!(this.state.email && this.state.password)}
            onClick={(e)=>this.submitBoth(e)}
          >
            Register
        </GFGButton>
        </Form>
      </GFGContainer>
    );
  }
}

export default SignUp;
