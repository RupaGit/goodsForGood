import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   Menu,
   Responsive,
   Visibility,
   Dropdown
} from "semantic-ui-react";
import socketIOClient from "socket.io-client";
import GFGMenu from "./GFGMenu";

var socket;

class Navigation extends Component {
   constructor() {
      super();
      this.state = {
         endpoint: ''
      }
      socket = socketIOClient("http://localhost:4000/", { transports: ['polling', 'websocket'] });
   }
   // hideFixedMenu = () => this.setState({ fixed: false });
   // showFixedMenu = () => this.setState({ fixed: true });
   // handleSidebarHide = () => this.setState({ sidebarOpened: false });
   // handleToggle = () => this.setState({ sidebarOpened: true });
   render() {
      const getWidth = () => {
         const isSSR = typeof window === "undefined";
         return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
      };
      const { children } = this.props;
      const { fixed } = this.state;
      return (
         <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            {/* <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        > */}
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
                     >
                        Home
                </Menu.Item>
                     <Menu.Item
                        as={Link}
                        to="/communityFeed"
                        content="communityFeed"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                     >
                        Community Feed
                </Menu.Item>
                  </Menu.Item>
                  <Menu.Item position="right">
                     {this.props.isLoggedIn ? (
                        // <Dropdown.Item
                        //    as={Link}
                        //    to={this.props.isLoggedIn ? "/userDashboard" : ""}
                        //    content="userDashboard"
                        //    primary={fixed}
                        //    style={{ marginLeft: "0.5em" }}
                        //    item
                        // >
                        //    Dashboard
                        //    <Dropdown.Menu>
                        //       <Dropdown.Item>Electronics</Dropdown.Item>
                        //       <Dropdown.Item>Automotive</Dropdown.Item>
                        //       <Dropdown.Item>Home</Dropdown.Item>
                        //    </Dropdown.Menu>
                        // </Dropdown.Item>
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
                        style={{ marginLeft: "0.5em" }}>
                        View Trades
                     </Menu.Item>

                     {/* Example for Guy: {this.props.path} */}
                     <Menu.Item
                        as={Link}
                        to={this.props.isLoggedIn ? "/logout" : "/login"}
                        content="login"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}>
                        {this.props.isLoggedIn ? "Log Out" : "Log In / Sign up"}
                     </Menu.Item>


                  </Menu.Item>
               </Container>
            </Menu>
            {/* </Visibility> */}
            {children}
         </Responsive>
      );
   }
}

export { Navigation, socket };
