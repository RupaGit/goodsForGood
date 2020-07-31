import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends Component {
    // state = {
    //     userName: "",
    //     userId: "",
    //     email: ""
    // }
    // // componentDidMount() {
    //     console.log("State is ", this.state);
    //     API.getUserData()
    //         .then(res => {
    //             this.setState({ userName: res.data.name, userId: res.data.id, email: res.data.email });
    //         })
    //         .catch(err => console.log(err));

    // }
    render() {
        console.log("User login status", this.props.isLoggedIn);
        const { component: Component, ...props } = this.props
        return (
            <Route
                {...props}
                render={props => (
                    this.props.isLoggedIn ?
                        <Component {...props} /> : <Redirect to='/login' />
                )}
            />
        )
    }
}

export default ProtectedRoute;