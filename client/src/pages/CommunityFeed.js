import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel } from "../components/GFGForm";
import { Form, Divider } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";
import userDashboard from "./UserDashboard";

class CommunityFeed extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            zipCode: ""
        }
    }



    // handleChange = (event) => {
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //   });
    // }

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
    render() {

        return (
            <GFGContainer>
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