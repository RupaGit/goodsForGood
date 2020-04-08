import React from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Myform from "./components/Myform";
import Mybutton from "./components/Mybutton";
import Textbox from "./components/Textbox";
// import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Login from "./pages/Login";
import API from "./utils/API";
import Navigation, { Component } from "./components/Navigation";
import SignUp from "./pages/SignUp";

class App extends React.Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    API.getUserData()
      .then(res => {
        console.log(res)
        if (res) { this.setState({ isLoggedIn: true }); }
        else this.setState({ isLoggedIn: false });
      }
      )

  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signUp" component={SignUp} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
