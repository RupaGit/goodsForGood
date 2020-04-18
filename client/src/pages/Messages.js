// import React, { Component } from "react";
// import {
//     GFGCardHeader,
//     GFGCardMeta,
//     GFGCardDes,
//     GFGImage,
//     GFGCardContent
// } from "../components/GFGCard";
// import { Comment, Form } from "semantic-ui-react";
// import { Redirect } from 'react-router-dom';
// import GFGContainer from "../components/GFGContainer";
// import { GFGButton } from "../components/GFGForm";
// import { Row, Header, Button, Icon } from 'semantic-ui-react'
// import { Divider } from 'semantic-ui-react'
// import MyTradeModal from '../components/GFGTradeModal'
// import API from "../utils/API";
// import Login from "./Login";
// import GFGMenu from "../components/GFGMenu"
// import GFGEditTradeModal from "../components/GFGEditTradeModal";
// import "../components/GFGContainer/style.css";
// import { socket } from "../components/GFGNavbar";




// class Messages extends Component {
//     constructor(props) {
//         super(props);
//         this.loadMessages = this.loadMessages.bind(this);
//         this.state = {
//             messages: [],
//             responseMessage: {},
//             displayReplyBox: false
//         }
//     }

//     componentDidMount() {
//         console.log("Props from component mount", this.props);
//         this.loadMessages();
//     }

//     handleInputChange = (event) => {
//         const { name, value, } = event.target;
//         this.setState((prevState) => ({
//             ...prevState,
//             responseMessage: {
//                 ...prevState.responseMessage,
//                 [name]: value,
//             },
//         }));
//     };

//     loadMessages = () => {
//         console.log("UserID IS", this.props.userId);
//         API.getMessages(this.props.userId)
//             .then(res => {
//                 this.setState({ messages: res.data });
//                 console.log(this.state.messages)
//             })
//             .catch(err => {
//                 console.log(err)
//             });
//     }

//     sendResponse = (messageId, sender, senderName, receiver, userMessage) => {
//         console.log(messageId, sender, receiver, userMessage);
//         socket.emit("new response", {
//             responseMessage: userMessage,
//             sender: sender,
//             senderName: senderName,
//             receiver: receiver,
//             messageId: messageId
//         })
//         this.loadMessages();
//     }


//     render() {
//         const { isLoggedIn, username, userId, email, zipCode } = this.props;
//         console.log("props in user dashboard", this.props);
//         if (!isLoggedIn) {
//             return <Redirect to="./Login" />
//         }
//         return (
//             <GFGContainer>

//                 <Header textAlign="center" color="teal" size='huge'>My Messages</Header>


//                 {this.state.messages.map(message =>
//                     <Comment.Group key={message._id}>
//                         <Comment fluid >
//                             <Comment.Content>
//                                 <Comment.Author as='a'>{message.senderName} :</Comment.Author>
//                                 <Comment.Metadata>
//                                 </Comment.Metadata>
//                                 <Comment.Text>{message.message}</Comment.Text>
//                             </Comment.Content>

//                             {message.responses.map(resMsg =>
//                                 <Comment.Group>
//                                     <Comment>
//                                         <Comment.Content>
//                                             <Comment.Author as='a'>{resMsg.responseSenderName}: </Comment.Author>
//                                             <Comment.Text>{resMsg.responseMessage}</Comment.Text>
//                                         </Comment.Content>
//                                     </Comment>
//                                 </Comment.Group>)}
//                         </Comment>
//                         <Form reply>
//                             <Form.Input
//                                 name={message._id}
//                                 value={this.state.responseMessage[message._id] || ""}
//                                 onChange={this.handleInputChange}
//                                 placeholder="Enter your response"
//                             />
//                             <Button content='Send Message' labelPosition='left' icon='edit' color="teal" onClick={() => this.sendResponse(message._id, userId, username, message.sender, this.state.responseMessage[message._id])} />
//                         </Form>
//                         <Divider horizontal><Icon name="comments"></Icon></Divider>
//                     </Comment.Group>

//                 )}


//             </GFGContainer>

//         );
//     }
// }

// export default Messages;
