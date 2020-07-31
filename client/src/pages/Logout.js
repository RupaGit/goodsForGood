import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import API from "../utils/API";

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
            return <Redirect to="./" />
        }
        return (null);
    }
}

export default Logout;