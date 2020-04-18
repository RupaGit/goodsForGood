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
    zipCode: this.props.zipCode,
    userCreated: false
  };


  handleInputChange = (event) => {
    const { name, value, } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    var userData = { name: this.state.name, email: this.state.email, password: this.state.password, zipCode: this.state.zipCode }
    console.log("userData is ", userData)
    console.log(userData);
    API.signUp(userData)
      .then(res => {
        this.setState({ userCreated: true });
        this.submitMail();
      })
      .catch(err => console.log(err));
  };

  //This function will only be invoked if the user creation is successful.
  submitMail = () => {
    var userData = { name: this.state.name, email: this.state.email, password: this.state.password, zipCode: this.state.zipCode }
    API.noderMailer(userData)
      .then(res => {
        this.setState({ userCreated: true });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { zipCode } = this.props;
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
              required
            />
          </Form.Field>
          <Form.Field>
            <GFGLabel>Password</GFGLabel>
            <GFGInput
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Enter your password"
              type='password'
              required
            />
            {zipCode ? (<Form.Field>
              <GFGLabel>Password</GFGLabel>
              <GFGInput
                value={zipCode}
                disabled
                name="zipCode"
                required
                placeholder="Enter your password"></GFGInput> </Form.Field>
            ) : (<Form.Field>
              <GFGLabel>Zip Code</GFGLabel>
              <GFGInput
                value={this.state.zipCode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="Enter your Zip Code"></GFGInput> </Form.Field>)}
          </Form.Field>
          <GFGButton
            disabled={!(this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Register
        </GFGButton>
        </Form>
      </GFGContainer>
    );
  }
}

export default SignUp;
