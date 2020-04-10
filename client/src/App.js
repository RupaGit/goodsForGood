import React from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Myform from "./components/Myform";
// import Mybutton from "./components/Mybutton";
// import Textbox from "./components/Textbox";
// import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Login from "./pages/Login";
import API from "./utils/API";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";

class App extends React.Component {
  state = {
    isLoggedIn: false
  }

  // componentDidMount() {
  //   API.getUserData()
  //     .then(res => {
  //       console.log("Response is ", res.data)
  //       if (!res.data.length) { this.setState({ isLoggedIn: false }); }
  //       else this.setState({ isLoggedIn: true });
  //     }
  //     )
  // }

  onUserLogin = (data) => {
    this.setState({ isLoggedIn: data });
  }

  onUserLogout = (data) => {
    this.setState({ isLoggedIn: data });
  }



  render() {
    const { isLoggedIn } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} logOut={this.logOut} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={() => <Login isAuthed={true} onUserLogin={this.onUserLogin} />} />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/logout" component={() => <Logout isAuthed={false} onUserLogout={this.onUserLogout} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
