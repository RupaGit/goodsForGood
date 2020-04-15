import React, { Component } from "react";
import {
    GFGCardHeader,
    GFGCardMeta,
    GFGCardDes,
    GFGImage,
} from "../components/GFGCard";
import { Card, Segment, Container } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';
import GFGContainer from "../components/GFGContainer";
import { GFGButton } from "../components/GFGForm";
import { Row, Header, Button, Icon } from 'semantic-ui-react'
import { Divider, Grid, Image } from 'semantic-ui-react'
import MyTradeModal from '../components/GFGTradeModal'
import API from "../utils/API";
import Login from "./Login";
import GFGMenu from "../components/GFGMenu"
import GFGEditTradeModal from "../components/GFGEditTradeModal";


class FavoriteTrades extends Component {

    render() {

        return (
            <GFGContainer>
                <GFGMenu />
                I am in FavoriteTrades
            </GFGContainer>

        );
    }
}

export default FavoriteTrades;
