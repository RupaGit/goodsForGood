import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider, Grid, Header } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import AddFeed from "./AddFeed";

class CommunityFeed extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            zipCode: "",
            userId: "",
            redirect: null,
            feeds: []
        }
    }


    componentDidMount() {
        API.getUserData()
            .then(res => this.setState({ userId: res.data.id }))
            .catch(err => console.log(err))
    }


    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    addNewFeed = (event) => {
        event.preventDefault();
        this.setState({ redirect: "/addNewFeed" })

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} userId={this.state.userId} zipCode={this.state.zipCode} />
        }
        return (
            <GFGContainer>
                {this.state.userId ? (<div><GFGButton color="teal" onClick={this.addNewFeed}> Add a new Feed </GFGButton>  <Divider horizontal>Or search for Feeds in your area </Divider> </div>) : (null)}

                <Form>
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
                </Form>

            </GFGContainer>
        );
    }
}

export default CommunityFeed;