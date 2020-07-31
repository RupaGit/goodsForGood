import React, { Component } from 'react';
import GFGMenu from "../components/GFGMenu";
import GFGContainer from "../components/GFGContainer";

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
