import React, { Component } from "react";
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Container } from "semantic-ui-react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Container>
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
            disabled={!(this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Register
          </GFGButton>
        </Form>
      </Container>
    );
  }
}

export default Login;
