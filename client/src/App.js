import React from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import API from "./utils/API";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import UserDashboard from "./pages/userDashboard"
import Trades from "./pages/Trades";


class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: 'currentUser',
    itemToTrade: 'name of item to trade',
    quantity1: '5',
    itemTradingFor: 'name of item user is trading for',
    quantity2: '21'

  }

  onUserLogin = (data) => {
    this.setState({ isLoggedIn: data });
    console.log("userLogged in", this.state.isLoggedIn);
  }

  onUserLogout = (data) => {
    this.setState({ isLoggedIn: data });
  }

  render() {
    const { isLoggedIn, username, itemToTrade, itemTradingFor, quantity1, quantity2 } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} logOut={this.logOut} /><Switch>
            <Route path="/" render={() => <Home isLoggedIn={isLoggedIn} />} exact />
            <Route path="/login" component={() => <Login isAuthed={true} onUserLogin={this.onUserLogin} />} />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/logout" component={() => <Logout isAuthed={true} onUserLogout={this.onUserLogout} />} />
            <Route path="/userDashboard" component={UserDashboard} exact />
            <Route
              path='/trades'
              render={() =>
                <Trades
                  username={username}
                  itemToTrade={itemToTrade}
                  quantity1={quantity1}
                  itemTradingFor={itemTradingFor}
                  quantity2={quantity2}
                />}
              exact
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
