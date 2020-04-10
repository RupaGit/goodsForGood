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
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";
import userDashborad from "./pages/userDashboard"
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

  render() {
    const { isLoggedIn, username, itemToTrade, itemTradingFor, quantity1, quantity2 } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/userDashborad" component={userDashborad} exact />
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
