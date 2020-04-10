import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import Home from "./Home";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount() {
        this.logoutUser();
    }


    logoutUser = () => {
        const { onUserLogout } = this.props;
        API.logout()
            .then(res => {
                this.setState({ isLoggedIn: false });
                onUserLogout(this.state.isLoggedIn);
            })
            .catch(err => {
                this.setState({ isLoggedIn: true });
                onUserLogout(this.state.isLoggedIn)
                console.log(err)
            });
    };
    render() {
        if (!this.state.isLoggedIn) {
            return <Redirect to="./Home" />
        }
        return (null);
    }
}

export default Logout;