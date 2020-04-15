import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

const menuItems = [
    { name: 'myTrades', label: 'My Trades' },
    { name: 'pendingTrades', label: 'Pending Trades' },
    { name: 'favoriteTrades', label: 'Favorite Trade' },
    { name: 'messages', label: 'Messages' }
]



export default class GFGMenu extends Component {
    state = { activeItem: 'myTrades', redirect: null, }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    // redirect: "/" + name
    render() {
        const { activeItem } = this.state;

        // if (this.state.redirect) {
        //     return <Redirect to={this.state.redirect} />
        // }
        // const { items } = this.props;
        return (
            <Dropdown.Menu >
                <Dropdown.Item as={Link} to={"/myTrades"}> My Trades </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/pendingTrades"}> Pending Trades </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/favoriteTrades"}> Favorite Trades </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/messages"}> Messages </Dropdown.Item>
                {/* {menuItems.map(({ label, name, ...rest }) => (
                    <Dropdown.Item name={name} as={Link} to={`/${name}`} active={activeItem === name} onClick={this.handleItemClick} {...rest}>
                    </Dropdown.Item>))} */}

            </Dropdown.Menu>
        )
    }
}