import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardDes,
    GFGCardContent
} from "../components/GFGCard";
import { Card, Form } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';
import GFGContainer from "../components/GFGContainer";
import { GFGButton } from "../components/GFGForm";
import { Header } from 'semantic-ui-react'
import API from "../utils/API";
import { socket } from "../components/GFGNavbar";

class FavoriteTrades extends Component {
    constructor(props) {
        super(props);
        this.loadFavoriteTrades = this.loadFavoriteTrades.bind(this);
        this.state = {
            trades: [],
            userMessage: {}
        }
    }

    componentDidMount() {
        console.log("Props from component mount", this.props);
        this.loadFavoriteTrades();
    }

    loadFavoriteTrades = () => {
        console.log("UserID IS", this.props.userId);
        API.getFavoriteTrades(this.props.userId)
            .then(res => {
                this.setState({ trades: res.data });
                console.log("Favorite trades are", this.state.trades);
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            userMessage: {
                ...prevState.userMessage,
                [name]: value,
            },
        }));
    };

    contactTradeOwner = (messageReceiverId, tradeId, message) => {
        console.log(this.state.message);
        const messageSenderId = this.props.userId;
        const senderName = this.props.username;
        console.log("senderName", senderName);
        console.log("Receiver id", messageReceiverId, "Sender id is", messageSenderId, "trade Id is", tradeId);
        if (!this.props.userId) return;
        // socket.on("message", (messageSenderId, messageReceiverId) => {
        // this.transmitMessage(this.state.message, messageSenderId, messageReceiverId)

        socket.emit("new message", {
            message: message,
            sender: messageSenderId,
            senderName: senderName,
            receiver: messageReceiverId,
            tradeId: tradeId
        })
        this.removeFavoriteTrade(tradeId);
    }

    removeFavoriteTrade = (tradeId) => {
        console.log("tradeId IS", tradeId);
        var data = { tradeId: tradeId, userId: this.props.userId }
        API.removeFavoriteTrade(data)
            .then((res) => {
                console.log('trade marked as completed.')
                this.loadFavoriteTrades()
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { isLoggedIn } = this.props;
        console.log("props in user dashboard", this.props);
        if (!isLoggedIn) {
            return <Redirect to="./Login" />
        }
        return (
            <GFGContainer>

                <Header textAlign="center" color="teal" size='huge'>My Favorite Trades</Header>
                {this.state.trades.map(newTrade =>
                    <Card fluid centered key={newTrade._id}>
                        <Card.Content>
                            <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                            <GFGCardDes> Requested Item Qty: {newTrade.reqItemQty} </GFGCardDes>
                            <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                            <GFGCardDes> Available Item Qty: {newTrade.availItemQty} </GFGCardDes>
                            <Form reply>
                                <Form.TextArea value={this.state.userMessage[newTrade._id] || ""}
                                    placeholder="Enter a message and click send Message to contact owner"
                                    onChange={this.handleInputChange}
                                    name={newTrade._id} />
                            </Form>
                        </Card.Content>
                        <GFGCardContent extra>
                            <GFGButton color='teal' onClick={() => this.contactTradeOwner(newTrade.userId, newTrade._id, this.state.userMessage[newTrade._id])}>Send Message</GFGButton>
                            <GFGButton color='teal' onClick={() => this.removeFavoriteTrade(newTrade._id)}>Remove</GFGButton>
                        </GFGCardContent>
                    </Card>
                )}
            </GFGContainer>

        );
    }
}


export default FavoriteTrades;
