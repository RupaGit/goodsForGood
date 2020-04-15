import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardMeta,
    GFGCardDes,
    GFGImage,
} from "../components/GFGCard";
import { Card, Segment, Container, Modal, Form } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import { GFGButton, GFGInput, GFGLabel, GFGTextArea } from "../components/GFGForm";
import { Row, Header, Button, Icon } from 'semantic-ui-react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import API from "../utils/API";
import { GFGModalHeader, GFGModalContent, GFGModalDesc } from "../components/GFGModal";
import { socket } from "../components/Navigation";


class ViewTrades extends Component {
    constructor(props) {
        super(props);
        this.loadUserTrades = this.loadUserTrades.bind(this);
        this.state = {
            trades: [],
            message: "",
            modalOpen: false
        }
    }

    componentDidMount() {
        console.log("Props from component mount", this.props);
        this.loadUserTrades();
    }

    handleClose = () => this.setState({ modalOpen: false })
    handleOpen = () => this.setState({ modalOpen: true })


    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
    };
    loadUserTrades = () => {
        console.log("UserID IS", this.props.userId);
        if (!this.props.userId) {
            API.getAllTradesByLoc(this.props.zipCode)
                .then(res => {
                    this.setState({ trades: res.data });
                })
                .catch(err => {
                    console.log(err)
                });
        }
        else {
            API.getFilteredTrades(this.props.zipCode, this.props.userId)
                .then(res => {
                    this.setState({ trades: res.data });
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }

    addFav = (tradeId) => {
        console.log("Trade ID", tradeId);
        console.log("User ID is", this.props.userId);
        var data = {
            userId: this.props.userId,
            tradeId: tradeId
        }
        console.log("Data passed to API is ", data);
        API.addToFavorites(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // transmitMessage = (message, sender, receiver) => {
    //     // const { socket } = this.props
    //     // socket.broadcast.to(receiver).emit('message', message);
    //     socket.emit("new message", {
    //         message, sender, receiver
    //     })
    // }

    sendMessage = (messageReceiverId) => {
        console.log(this.state.message);
        const messageSenderId = this.props.userId;
        console.log("Receiver id", messageReceiverId, "Sender id is", messageSenderId);
        if (!this.props.userId) return;
        // socket.on("message", (messageSenderId, messageReceiverId) => {
        // this.transmitMessage(this.state.message, messageSenderId, messageReceiverId)

        socket.emit("new message", {
            message: this.state.message,
            sender: messageSenderId,
            receiver: messageReceiverId
        })
        this.handleClose();
        // })
        // socket.emit("send message", this.state.message, function() {
        //     console.log("Message sent")
        //     // socket.broadcast.to(socketid).emit('message', 'for your eyes only');


        //   });

    }

    render() {
        const { isLoggedIn, userId, email, zipCode } = this.props;
        console.log(this.props);
        return (
            <GFGContainer>
                <Grid >
                    {/* ui centered grid */}
                    <Header textAlign='center' color="teal" size='huge'>All Trades in my neighborhood</Header>

                    <Grid.Row>

                        {this.state.trades.map(newTrade =>
                            <Card fluid key={newTrade._id} >
                                <Card.Content>
                                    <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                                    <GFGCardHeader> Requested Item Qty: {newTrade.reqItemQty} </GFGCardHeader>
                                    <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                                    <GFGCardHeader> Available Item Qty: {newTrade.availItemQty} </GFGCardHeader>
                                </Card.Content>
                                {(isLoggedIn) ? (<Card.Content extra>
                                    {/* //We have to implement socket.io for contact trade owner button */}
                                    <Modal trigger={<GFGButton color='teal' onClick={this.handleOpen}>Contact Trade Owner</GFGButton>}
                                        open={this.state.modalOpen}
                                        onClose={this.handleClose}>
                                        <GFGModalHeader color="teal"> Please enter your message to the trade owner </GFGModalHeader>
                                        <GFGModalContent color="teal">
                                            <Form>
                                                <Form.Field>
                                                    <GFGTextArea
                                                        value={this.state.message}
                                                        onChange={this.handleInputChange}
                                                        name="message"
                                                        placeholder="Enter your message to the owner"
                                                    />
                                                </Form.Field>
                                                <GFGButton color='teal' onClick={() => this.sendMessage(newTrade.userId)}>Send Message</GFGButton>
                                            </Form>
                                        </GFGModalContent>

                                    </Modal>
                                    <GFGButton color='green' onClick={() => this.addFav(newTrade._id)}>Add to Favorites </GFGButton>

                                </Card.Content>) : null}
                            </Card>
                        )}
                    </Grid.Row>
                </Grid>
            </GFGContainer>
        );
    }
}

export default ViewTrades;
