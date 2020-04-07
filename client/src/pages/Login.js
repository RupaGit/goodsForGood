import React, { Component } from "react";
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

  handleInputChange = (event) => {
    const { name, value,} = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  /*** this is the place where we  */
  };
  render() {
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

export default Login;
// import React from "react";
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Image,
//   Message,
//   Segment
// } from "semantic-ui-react";
// import { Navigation } from 'react';

// const LoginForm = () => (
//   <Grid textAlign='center'  style={{ height: '100vh'}} verticalAlign='middle'>
//     <Grid.Column style={{ maxWidth: 450 }}>
//       <Header as='h2' color='#1b1c1d' textAlign='center'>
//         <Image src='/images/GoodsforGoodLogo.png'/> Log-in to your account
//       </Header>
//       <Form size='large'>
//         <Segment stacked>
//           <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
//           <Form.Input
//             fluid
//             icon='lock'
//             iconPosition='left'
//             placeholder='Password'
//             type='password'
//           />

//           <Button color='#1b1c1d' fluid size='large'>
//             Login
//           </Button>
//         </Segment>
//       </Form>
//       <Message>
//         New to us? <a href='#'>Sign Up</a>
//       </Message>
//     </Grid.Column>
//   </Grid>
// )
// export default LoginForm
