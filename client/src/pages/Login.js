import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import userDashboard from "./userDashboard";

class Login extends Component {
  state = {
    email: "",
    password: "",
    userId: ""
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
    var credentials = { email: this.state.email, password: this.state.password }
    console.log(credentials);
    API.logIn(credentials)
      .then(res => {
        this.setState({ userId: res.data });
      })
      .catch(err => console.log(err));
    console.log(this.state.userId);
  };
  render() {
    if (this.state.userId) {
      return <Redirect to="./userDashboard" />
    }
    return (
      <GFGContainer>
        <Form>
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
            color="teal"
            disabled={!(this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Login
          </GFGButton>
          <Divider horizontal>New to Goods for Good?</Divider>

          <GFGButton
            color="grey"
            onClick={this.handleClick}
          >
            Sign Up to Goods For Good
          </GFGButton>
        </Form>
      </GFGContainer>
    );
  }
}

export default Login;