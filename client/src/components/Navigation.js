import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Visibility
} from "semantic-ui-react";
export default class Navigation extends Component {
  state = {}
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });
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
                  to="/trades"
                  content="login"
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Trades
                </Menu.Item>
              </Menu.Item>
              <Menu.Item position="right">
                {/* Example for Guy: {this.props.path} */}
                <Menu.Item
                  as={Link}
                  to="/login"
                  content="login"
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  {this.props.isLoggedIn ? "Log Out" : "Log In" }
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/SignUp"
                  content="SignUp"
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign up
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
