import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardDes,
    GFGCardContent,
} from "../components/GFGCard";
import { Card } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';
import GFGContainer from "../components/GFGContainer";
import { GFGButton } from "../components/GFGForm";
import { Header } from 'semantic-ui-react'
import API from "../utils/API";
import GFGMessages from "../components/GFGMessages";



class PendingTrades extends Component {
    constructor(props) {
        super(props);
        this.loadPendingTrades = this.loadPendingTrades.bind(this);
        this.state = {
            trades: []
        }
    }

    componentDidMount() {
        console.log("Props from component mount", this.props);
        this.loadPendingTrades();
    }

    loadPendingTrades = () => {
        console.log("UserID IS", this.props.userId);
        API.getPendingTrades(this.props.userId)
            .then(res => {
                this.setState({ trades: res.data });
                console.log("Pending trades are", this.state.trades);
            })
            .catch(err => {
                console.log(err)
            });
    }
    completePendingTrade = (tradeId) => {
        console.log("tradeId IS", tradeId);
        var data = { tradeId: tradeId, userId: this.props.userId }
        API.completeTrade(data)
            .then((res) => {
                console.log('trade marked as completed.')
                this.loadPendingTrades()
            }).catch((error) => {
                console.log(error)
            })
    }
    removePendingTrade = (tradeId) => {
        console.log("tradeId IS", tradeId);
        var data = { tradeId: tradeId, userId: this.props.userId }
        API.removePendingTrade(data)
            .then((res) => {
                console.log('trade marked as completed.')
                this.loadPendingTrades()
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { isLoggedIn, username, userId } = this.props;
        console.log("props in user dashboard", this.props);
        if (!isLoggedIn) {
            return <Redirect to="./Login" />
        }
        return (
            <GFGContainer>

                <Header textAlign="center" color="teal" size='huge'>My Pending Trades</Header>
                {this.state.trades.map(newTrade =>
                    <Card fluid centered key={newTrade._id}>
                        <Card.Content>
                            <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                            <GFGCardDes> Requested Item Qty: {newTrade.reqItemQty} </GFGCardDes>
                            <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                            <GFGCardDes> Available Item Qty: {newTrade.availItemQty} </GFGCardDes>
                        </Card.Content>
                        <GFGCardContent extra>
                            <GFGButton color='teal' onClick={() => this.completePendingTrade(newTrade._id)}>Mark as Complete</GFGButton>
                            <GFGButton color='red' onClick={() => this.removePendingTrade(newTrade._id)}>Remove</GFGButton>
                            <GFGMessages tradeId={newTrade._id} username={username} userId={userId} />
                        </GFGCardContent>
                    </Card>
                )}
            </GFGContainer>

        );
    }
}


export default PendingTrades;
