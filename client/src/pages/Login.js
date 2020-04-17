import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import { Link } from "react-router-dom";
import UserDashboard from "./userDashboard";
import "../components/GFGContainer/style.css";
import GFGanimationContainer from "../components/GFGanimationContainer";



class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      userId: ""
    }
  }

  handleInputChange = (event) => {
    const { name, value, } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { onUserLogin } = this.props;
    var userLoggedIn
    var credentials = { email: this.state.email, password: this.state.password }
    console.log(credentials);
    API.logIn(credentials)
      .then(res => {
        this.setState({ userId: res.data });
        userLoggedIn = true;
        onUserLogin(userLoggedIn);
      })
      .catch(err => {
        userLoggedIn = false;
        onUserLogin(userLoggedIn)
        console.log(err)
      });
    console.log(this.state.userId);
  };
  render() {
    if (this.state.userId) {
      return <Redirect to="./" />
    }
    return (
      <div>
      {/* <GFGanimationContainer/> */}
      <GFGContainer id="Shadobox">
        <Form style={{zIndex:2}}>
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
            as={Link}
            to="/SignUp"
          >
            Sign Up to Goods For Good
          </GFGButton>
        </Form>
      
      </GFGContainer>
      </div>
    );
  }
}

export default Login;