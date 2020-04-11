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

const trades = [{
    "reqItem": "Milk",
    "reqItemQty": "3",
    "availItem": "Chocolate",
    "availItemQty": "11",
    "userId": "5e8885fed9e9ab44c005f637"
},
{
    "reqItem": "Cheese",
    "reqItemQty": "1",
    "availItem": "Hand Sanitizer",
    "availItemQty": "5",
    "userId": "5e8885fed9e9ab44c005f637"
},
{
    "reqItem": "Ketchup",
    "reqItemQty": "1",
    "availItem": "Mayonnaise",
    "availItemQty": "1",
    "userId": "5e8885fed9e9ab44c005f637"
},
{
    "reqItem": "Milk",
    "reqItemQty": "3",
    "availItem": "Chocolate",
    "availItemQty": "11",
    "userId": "5e8885fed9e9ab44c005f637"
},
{
    "reqItem": "Cheese",
    "reqItemQty": "1",
    "availItem": "Hand Sanitizer",
    "availItemQty": "5",
    "userId": "5e8885fed9e9ab44c005f637"
},
{
    "reqItem": "Ketchup",
    "reqItemQty": "1",
    "availItem": "Mayonnaise",
    "availItemQty": "1",
    "userId": "5e8885fed9e9ab44c005f637"
}]

class UserDashboard extends Component {

    render() {
        const { isLoggedIn, userId, email } = this.props;
        return (
            <Container>
                <MyTradeModal userId={userId} email={email} >
                    <Grid>
                        <Grid.Column textAlign="center" style={{ marginTop: '25px' }}>
                            {isLoggedIn ? (<Button primary size='huge'>
                                Start Trading
                                <Icon name='right arrow' />
                            </Button>) : null}
                        </Grid.Column>
                    </Grid>
                </MyTradeModal>
                <GFGContainer>

                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Card centered>
                                    <Header size='huge'>My Trades</Header>
                                </Card>
                                {trades.map((newTrade) =>
                                    <Card fluid centered>
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
                                <Card centered>
                                    <Header size='huge'>Pending Trades</Header>
                                </Card>
                                {trades.map((newTrade) =>
                                    <Card fluid centered>
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
            </Container>
        );
    }
}

export default UserDashboard;
