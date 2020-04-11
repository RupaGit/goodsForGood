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


class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trades: []
        }
    }

    componentDidMount() {
        console.log("Props from component mount", this.props);
        this.loadUserTrades(this.props.userId);
    }

    loadUserTrades = (user) => {
        console.log("UserID IS", user)
        API.getTradesByUserId(this.props.userId)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

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
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <p>
                                <Image src='/images/wireframe/short-paragraph.png' />
          Add what ever we want
        </p>
                            <p>
                                Add what ever we want
        </p>
                            <p>
                                Add what ever we want
        </p>
                            <p>
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Image src='/images/wireframe/short-paragraph.png' />
                            </p>
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Card centered>
                                    <Header size='huge'>My Trades</Header>
                                    <GFGImage src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg" />
                                    <Card.Content>
                                        <GFGCardHeader> I am a card header </GFGCardHeader>
                                        <GFGCardMeta> I am the meta of the card </GFGCardMeta>
                                        <GFGCardDes> This is the description</GFGCardDes>
                                        <GFGButton> Super Rupa </GFGButton>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card centered>
                                    <Header size='huge'>Pending Trades</Header>
                                    <GFGImage src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg" />
                                    <Card.Content>
                                        <GFGCardHeader> I am a card header </GFGCardHeader>
                                        <GFGCardMeta> I am the meta of the card </GFGCardMeta>
                                        <GFGCardDes> This is the description</GFGCardDes>
                                        <GFGButton> Super Rupa </GFGButton>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </GFGContainer>
            </Container>
        );
    }
}

export default UserDashboard;
