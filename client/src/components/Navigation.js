import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   Menu,
   Button,
   Icon,
   Transition,
   Responsive,
   Visibility
} from "semantic-ui-react";
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
                     {this.props.isLoggedIn ? (<Menu.Item
                        as={Link}
                        to={this.props.isLoggedIn ? "/userDashboard" : ""}
                        content="userDashboard"
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                        onClick={this.toggleVisibility}
                     >
                        Dashboard
                     </Menu.Item>) : null}
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
