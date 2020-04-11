import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardMeta,
    GFGCardDes,
    GFGImage,
} from "../components/GFGCard";
import { Card } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import { GFGButton } from "../components/GFGForm";
import { Grid, Row, Header } from 'semantic-ui-react'

class UserDashboard extends Component {
    render() {
        return (
            <GFGContainer>
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
        );
    }
}

export default UserDashboard;
