import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import GFGMenu from "../components/GFGMenu";
import GFGContainer from "../components/GFGContainer";
import { Menu } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyTrades from "./MyTrades";
import PendingTrades from "./PendingTrades"
import FavoriteTrades from "./FavoriteTrades";
import Messages from "./Messages";




class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.loadUserTrades = this.loadUserTrades.bind(this);
        this.state = {
            trades: [],
            activeItem: 'home',
            redirect: null
        }
    }


    // state = { activeItem: 'home', redirect: null, }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name, redirect: "/" + name })

    // redirect: "/" + name
    render() {
        const { activeItem } = this.state;

        // if (this.state.redirect) {
        //     return <Redirect to={this.state.redirect} />
        // }
        return (
            <GFGContainer>
                <GFGMenu />
            </GFGContainer>
        )
    }
}

export default Dashboard;
