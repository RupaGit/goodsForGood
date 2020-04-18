import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { GFGButton, GFGInput, GFGLabel, GFGTextArea, GFGDropdown } from "../components/GFGForm";
import { Form, Dropdown } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";
import API from "../utils/API";

class AddFeed extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            zipCode: this.props.zipCode,
            storeName: "",
            description: "",
            redirect: null
        }
    }

    // componentDidMount() {
    //     console.log(this.props.zipCode);
    //     if (!this.props.zipCode) {
    //         this.setState({ redirect: "/communityFeed" })
    //     }
    // }




    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        console.log("State is", this.state)
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        var userName
        if (this.props.username) {
            userName = this.props.username
        }
        else {
            userName = "Unanimous"
        }
        console.log(this.props.username);

        console.log(userName);
        var feedData = {
            message: this.state.description,
            zipCode: this.state.zipCode,
            storeName: this.state.storeName,
            createdBy: userName
        }
        API.createFeed(feedData)
            .then(res => {
                console.log(res);
                this.setState({ redirect: "/communityFeed" })
            })
            .catch(err => console.log(err));

    };

    handleSelectChange = (e, { value }) => this.setState({ value })


    render() {
        const options = [
            { key: "1", text: "Yes", value: "FULL" },
            { key: "2", text: "No", value: "NOT_FULL" }
        ];
        const { zipCode } = this.props;

        console.log(this.props.username);
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <GFGContainer>
                <Form>
                    <Form.Field>
                        <GFGLabel>Store Name</GFGLabel>
                        <GFGInput
                            value={this.state.storeName}
                            onChange={this.handleInputChange}
                            name="storeName"
                            placeholder="Enter the Store Name"
                        />
                    </Form.Field>
                    <Form.Field>
                        <GFGLabel>Available Products</GFGLabel>
                        <GFGTextArea
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Enter list of products"
                        />
                    </Form.Field>
                    <Form.Field>
                        <GFGLabel>Zip Code</GFGLabel>
                        {/* <Checkbox toggle /> */}

                        {zipCode ? (<Form.Field>
                            <GFGInput
                                value={zipCode}
                                disabled
                                name="zipCode"
                                placeholder="Enter Store zip code"></GFGInput> </Form.Field>
                        ) : (<Form.Field>
                            <GFGInput
                                value={this.state.zipCode}
                                onChange={this.handleInputChange}
                                name="zipCode"
                                placeholder="Enter store Zip Code"></GFGInput> </Form.Field>)}
                    </Form.Field>


                    <GFGButton
                        color="teal"
                        disabled={!(this.state.zipCode)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit Feed
                                </GFGButton>
                </Form>

            </GFGContainer>
        );
    }
}

export default AddFeed;