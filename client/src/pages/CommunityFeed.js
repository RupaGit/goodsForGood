import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider, Feed, Icon } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import AddFeed from "./AddFeed";
import Moment from 'react-moment';

class CommunityFeed extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.loadCommunityFeed = this.loadCommunityFeed.bind(this);
        this.state = {
            zipCode: "",
            redirect: null,
            feeds: [],
        }
    }

    componentDidMount() {
        this.setState({ zipCode: this.props.zipCode })
        if (this.props.zipCode) {
            this.loadCommunityFeed(this.props.zipCode)
        }
    }

    loadCommunityFeed = (zipCode) => {
        console.log(this.state.zipCode);
        API.getCommunityFeed(zipCode)
            .then(res => this.setState({ feeds: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        console.log(this.state.zipCode)
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.loadCommunityFeed(this.state.zipCode);
    };

    addNewFeed = (event) => {
        event.preventDefault();
        this.setState({ redirect: "/addNewFeed" })

    }
    increaseLikes = (feedId) => {
        API.increaseLikes(feedId)
            .then(res => this.loadCommunityFeed(this.props.zipCode))
            .catch(err => console.log(err));
    }
    increaseDislikes = (feedId) => {
        API.increaseDislikes(feedId)
            .then(res => this.loadCommunityFeed(this.props.zipCode))
            .catch(err => console.log(err));
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} username={this.props.username} zipCode={this.state.zipCode} />
        }
        return (
            <GFGContainer>
                {!this.props.zipCode ? (<Form>
                    <Form.Field>
                        <GFGLabel>Zip Code</GFGLabel>
                        <GFGInput
                            value={this.state.zipCode}
                            onChange={this.handleInputChange}
                            name="zipCode"
                            placeholder="Enter your zipcode"
                        />
                    </Form.Field>
                    <GFGButton
                        color="teal"
                        disabled={!(this.state.zipCode)}
                        onClick={this.handleFormSubmit}
                    >
                        Search
                                </GFGButton>
                </Form>) : null}
                {(this.props.zipCode || this.state.zipCode) ? (<GFGButton color="teal" onClick={this.addNewFeed}> Add a new Feed </GFGButton>) : null}

                <Divider horizontal> Store Feed in my neighborhood </Divider>

                {this.state.feeds.map(feed =>
                    <Feed key={feed._id}>
                        <Feed.Event>
                            <Feed.Content>
                                <Feed.Summary>
                                    <a>{feed.createdBy}</a> posted on
                                    <Feed.Date>
                                        <Moment format="MM-DD-YYYY  -  HH:mm" date={feed.created} />
                                    </Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text>
                                    Items found: {feed.message}
                                </Feed.Extra>
                                <Feed.Extra text>
                                    Store Name: {feed.storeName}
                                </Feed.Extra>
                                <Feed.Meta>
                                    <Feed.Like>
                                        <Icon name='thumbs up' onClick={() => this.increaseLikes(feed._id)} />{feed.likes}
                                    </Feed.Like>
                                    <Feed.Like>
                                        <Icon name='thumbs down' onClick={() => this.increaseDislikes(feed._id)} />{feed.dislikes}
                                    </Feed.Like>
                                </Feed.Meta>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                )}
            </GFGContainer>
        );
    }
}

export default CommunityFeed;