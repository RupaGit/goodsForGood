import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardMeta,
    GFGCardDes,
    GFGImage,
} from "../components/GFGCard";
import { Card, Segment, Container } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import { GFGButton } from "../components/GFGForm";
import { Row, Header, Button, Icon } from 'semantic-ui-react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import MyTradeModal from '../components/GFGTradeModal/index'
import API from "../utils/API";


class ViewTrades extends Component {
    constructor(props) {
        super(props);
        this.loadUserTrades = this.loadUserTrades.bind(this);
        this.state = {
            trades: []
        }
    }

    componentDidMount() {
        console.log("Props from component mount", this.props);
        this.loadUserTrades();
    }

    loadUserTrades = () => {
        console.log("UserID IS", this.props.userId);
        API.getTradesByUserId(this.props.userId)
            .then(res => {
                this.setState({ trades: res.data });
            })
            .catch(err => {
                console.log(err)
            });
    }


    render() {
        const { isLoggedIn, userId, email } = this.props;
        return (
            <GFGContainer>

                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header textAlign="center" color="teal" size='huge'>My Trades</Header>

                            {this.state.trades.map(newTrade =>
                                <Card fluid centered key={newTrade._id}>
                                    <Card.Content>
                                        <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                                        <GFGCardDes> Requested Item Qty: {newTrade.reqItemQty} </GFGCardDes>
                                        <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                                        <GFGCardDes> Available Item Qty: {newTrade.availItemQty} </GFGCardDes>
                                        <GFGButton color='teal'>Edit</GFGButton>
                                        <GFGButton color='red'>Delete</GFGButton>
                                    </Card.Content>
                                </Card>
                            )}
                        </Grid.Column>
                        <Grid.Column>
                            <Header textAlign="center" color="teal" size='huge'>Pending Trades</Header>

                            {this.state.trades.map(newTrade =>
                                <Card fluid centered key={newTrade._id}>
                                    <Card.Content>
                                        <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                                        <GFGCardDes> Requested Item Qty: {newTrade.reqItemQty} </GFGCardDes>
                                        <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                                        <GFGCardDes> Available Item Qty: {newTrade.availItemQty} </GFGCardDes>
                                        <GFGButton color='teal'>Edit</GFGButton>
                                        <GFGButton color='red'>Delete</GFGButton>
                                    </Card.Content>
                                </Card>
                            )}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </GFGContainer>
        );
    }
}

export default ViewTrades;