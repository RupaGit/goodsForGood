import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   Menu,
   Button,
   Icon,
   Transition,
   Responsive,
   Visibility,
   Dropdown
} from "semantic-ui-react";
import socketIOClient from "socket.io-client";
import GFGMenu from "./GFGMenu";

var socket;

// class Navigation extends Component {
//    constructor() {
//       super();
//       this.state = {
//          endpoint: ''
//       }
//       socket = socketIOClient("http://localhost:4000/", { transports: ['polling', 'websocket'] });
//    }
//    // hideFixedMenu = () => this.setState({ fixed: false });
//    // showFixedMenu = () => this.setState({ fixed: true });
//    // handleSidebarHide = () => this.setState({ sidebarOpened: false });
//    // handleToggle = () => this.setState({ sidebarOpened: true });
export default class Navigation extends Component {
   state = {}
   handleChange = (e, { name, value }) => this.setState({ [name]: value })
   toggleVisibility = () =>
      this.setState((prevState) => ({ visible: !prevState.visible }))

   render() {
      const getWidth = () => {
         const isSSR = typeof window === "undefined";
         return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
      };
      const { children } = this.props;
      const { fixed } = this.state;
      return (
         <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Menu
               fixed={fixed ? "top" : null}
               pointing={!fixed}
               secondary={!fixed}
               size="huge"
            >
               <Container>
                  <Menu.Item position="center">
                     <Menu.Item
                        as={Link}
                        to="/"
                        content="Home"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                        visible
                     >
                     </Menu.Item >
                     <Menu.Item
                        as={Link}
                        to="/communityFeed"
                        content="communityFeed"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                        onClick={this.toggleVisibility}
                     >
                        Community Feed
                </Menu.Item>
                  </Menu.Item>
                  <Menu.Item position="right">
                     {this.props.isLoggedIn ? (
                        <Dropdown item text="Dashboard">
                           <Dropdown.Menu>
                              <Dropdown.Item as={Link} to={"/myTrades"}> My Trades </Dropdown.Item>
                              <Dropdown.Item as={Link} to={"/pendingTrades"}> Pending Trades </Dropdown.Item>
                              <Dropdown.Item as={Link} to={"/favoriteTrades"}> Favorite Trades </Dropdown.Item>
                              <Dropdown.Item as={Link} to={"/messages"}> Messages </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     ) : null}
                     <Menu.Item
                        as={Link}
                        to={"/viewTrades"}
                        content="viewTrades"
                        primary={fixed}
                        onClick={this.toggleVisibility}
                        style={{ marginLeft: "0.5em" }}>
                        View Trades
                     </Menu.Item>

                     {/* Example for Guy: {this.props.path} */}
                     <Menu.Item
                        as={Link}
                        onClick={this.toggleVisibility}
                        to={this.props.isLoggedIn ? "/logout" : "/login"}
                        content="login"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}>
                        {this.props.isLoggedIn ? "Log Out" : "Log In / Sign up"}
                     </Menu.Item>


                  </Menu.Item>
               </Container>
            </Menu>
            {children}
         </Responsive>
      );
   }
}

export { Navigation, socket };
