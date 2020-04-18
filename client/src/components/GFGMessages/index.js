import React, { Component } from "react";
import { Modal, Comment, Header, Icon, Form, Divider, Button } from "semantic-ui-react";
import API from "../../utils/API"
import { socket } from "../GFGNavbar";

// import "./style.css";

export default class GFGMessages extends Component {
    constructor(props) {
        super(props)
        this.loadTradeMessages = this.loadTradeMessages.bind(this);
        this.state = {
            messages: [],
            response: {},
            displayReplyBox: false
        }
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    componentDidMount() {
        this.loadTradeMessages(this.props.tradeId)
    }

    loadTradeMessages = (tradeId) => {
        API.getMessagesByTrade(tradeId)
            .then(messages => this.setState({ messages: messages.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            response: {
                ...prevState.response,
                [name]: value,
            },
        }));
    };
    sendResponse = (messageId, sender, senderName, receiver, userMessage) => {
        console.log(messageId, sender, receiver, userMessage);
        socket.emit("new response", {
            responseMessage: userMessage,
            sender: sender,
            senderName: senderName,
            receiver: receiver,
            messageId: messageId
        })
        this.loadTradeMessages(this.props.tradeId);
    }

    render() {
        const { username, userId } = this.props;
        console.log("The props in the modal are", this.props);
        console.log(this.state);
        return (
            <Modal trigger={<Button color='teal'>
                <Icon name="chat"></Icon> Chat
            </Button>} closeIcon>
                <Header content='Messages for this Trade' />
                <Modal.Content>
                    {this.state.messages.map(message =>
                        <Comment.Group key={message._id}>
                            <Comment >
                                <Comment.Content>
                                    <Comment.Author as='a'>{message.senderName} :</Comment.Author>
                                    <Comment.Metadata>
                                    </Comment.Metadata>
                                    <Comment.Text>{message.message}</Comment.Text>
                                </Comment.Content>

                                {message.responses.map(resMsg =>
                                    <Comment.Group key={resMsg._id}>
                                        <Comment>
                                            <Comment.Content>
                                                <Comment.Author as='a'>{resMsg.responseSenderName}: </Comment.Author>
                                                <Comment.Text>{resMsg.responseMessage}</Comment.Text>

                                            </Comment.Content>
                                        </Comment>
                                    </Comment.Group>)}
                            </Comment>
                            <Form reply>
                                <Form.Input
                                    name={message._id}
                                    value={this.state.response[message._id] || ""}
                                    onChange={this.handleInputChange}
                                    placeholder="Enter your response"
                                />
                                <Button content='Send Message' labelPosition='left' icon='edit' color="teal" onClick={() => this.sendResponse(message._id, userId, username, message.sender, this.state.response[message._id])} />
                            </Form>
                            <Divider horizontal><Icon name="comments"></Icon></Divider>
                        </Comment.Group>)}

                </Modal.Content>
            </Modal>
        );
    }
}


// onClick={() => this.sendResponse(message._id, userId, username, message.sender, this.state.responseMessage[message._id])}