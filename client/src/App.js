import React from "react";
import "./App.css";
// import { Button } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import API from "./utils/API";
import { Navigation } from "./components/Navigation";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import UserDashboard from "./pages/userDashboard";
import Dashboard from "./pages/Dashboard";
import Trades from "./pages/Trades";
import CommunityFeed from "./pages/CommunityFeed";
import AddFeed from "./pages/AddFeed";
import ViewTrades from "./pages/ViewTrades";
import MyTrades from "./pages/MyTrades";
import PendingTrades from "./pages/PendingTrades"
import FavoriteTrades from "./pages/FavoriteTrades";
import Messages from "./pages/Messages";



class App extends React.Component {

  // this.getZipCode = this.getZipCode.bind(this)
  state = {
    isLoggedIn: false,
    username: "",
    email: "",
    userId: "",
    zipCode: ""
    // itemToTrade: 'name of item to trade',
    // quantity1: '5',
    // itemTradingFor: 'name of item user is trading for',
    // quantity2: '21'

  }


  componentDidMount() {
    this.getZipCode();
  }

  getZipCode = () => {
    var lat, lng;
    let currentComponent = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      var coords = { lat: lat, lng: lng };
      console.log("coordinates are ", coords);
      API.zipLocation(coords)
        .then(res => {
          currentComponent.setState({ zipCode: res.data.results[0].components.postcode });
          console.log(res.data.results[0].components.postcode);
        })
        .catch(err => console.log(err))
    });
  }

  onUserLogin = (data) => {
    // this.setState({ isLoggedIn: data });
    API.getUserData()
      .then(res => this.setState({ isLoggedIn: data, email: res.data.email, username: res.data.name, userId: res.data.id, zipCode: res.data.zipCode }))
      .catch(err => console.log(err))
  }

  onUserLogout = (data) => {
    this.setState({ isLoggedIn: data });
  }

  render() {
    console.log("State of app js", this.state);
    const { isLoggedIn, username, userId, email, zipCode } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} logOut={this.logOut} /><Switch>
            <Route path="/" render={() => <Home isLoggedIn={isLoggedIn} />} exact />
            <Route path="/login" component={() => <Login isAuthed={true} onUserLogin={this.onUserLogin} />} />
            <Route path="/signUp" render={() => <SignUp isLoggedIn={isLoggedIn} zipCode={zipCode} />} exact />
            <Route path="/logout" component={() => <Logout isAuthed={true} onUserLogout={this.onUserLogout} />} />
            <Route path="/userDashboard" render={() => <Dashboard isLoggedIn={isLoggedIn} userId={userId} email={email} zipCode={zipCode} />} exact />
            <Route path="/communityFeed" render={() => <CommunityFeed isLoggedIn={isLoggedIn} userId={userId} email={email} zipCode={zipCode} />} exact />
            <Route path="/addNewFeed" render={() => <AddFeed isLoggedIn={isLoggedIn} userId={userId} email={email} zipCode={zipCode} />} exact />
            <Route path="/viewTrades" render={() => <ViewTrades isLoggedIn={isLoggedIn} userId={userId} email={email} zipCode={zipCode} />} exact />
            <Route path="/myTrades" render={() => <MyTrades isLoggedIn={isLoggedIn} userId={userId} email={email} zipCode={zipCode} />} exact />
            <Route exact path="/pendingTrades" component={PendingTrades} />
            <Route exact path="/favoriteTrades" component={FavoriteTrades} />
            <Route exact path="/messages" component={Messages} />


            {/* <Route
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
            /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
