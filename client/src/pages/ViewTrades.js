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
        API.getTradesByLocation(this.props.zipCode)
            .then(res => {
                this.setState({ trades: res.data });
            })
            .catch(err => {
                console.log(err)
            });
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
                            <Card fluid key={newTrade._id}>
                                <Card.Content>
                                    <GFGCardHeader>Requested Item: {newTrade.reqItem}</GFGCardHeader>
                                    <GFGCardHeader> Requested Item Qty: {newTrade.reqItemQty} </GFGCardHeader>
                                    <GFGCardHeader>Available Item: {newTrade.availItem}</GFGCardHeader>
                                    <GFGCardHeader> Available Item Qty: {newTrade.availItemQty} </GFGCardHeader>
                                </Card.Content>
                                {(isLoggedIn) ? (<Card.Content extra>

                                    <GFGButton color='teal'>Contact Trade Owner</GFGButton>
                                    <GFGButton color='red'>Add to Favorites </GFGButton>

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
