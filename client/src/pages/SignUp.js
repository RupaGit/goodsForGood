import React, { Component } from "react";
import {
  GFGCardHeader,
  GFGCardMeta,
  GFGCardDes,
  GFGImage,
} from "../components/GFGCard";
import { Card } from "semantic-ui-react";
import GFGContainer from "../components/GFGContainer";

class SignUp extends Component {
  //   state = {
  //     email: "",
  //     password: ""
  //   };

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  //   handleFormSubmit = event => {
  //     event.preventDefault();
  //   };
  render() {
    return (
      <GFGContainer>
        <Card>
          <GFGImage src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg" />
          <Card.Content>
            <GFGCardHeader> I am a card header </GFGCardHeader>
            <GFGCardMeta> I am the meta of the card </GFGCardMeta>
            <GFGCardDes> This is the description</GFGCardDes>
          </Card.Content>
        </Card>
      </GFGContainer>
    );
  }
}

export default SignUp;
