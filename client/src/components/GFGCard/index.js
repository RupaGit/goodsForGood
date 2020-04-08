import React from "react";
import { Card, Image } from "semantic-ui-react";

export function GFGCardHeader(props) {
  return <Card.Header {...props}> {props.children}</Card.Header>;
}

export function GFGCardMeta(props) {
  return <Card.Meta {...props} />;
}

export function GFGCardDes(props) {
  return <Card.Description {...props} />;
}

export function GFGCardGroup(props) {
  return <Card.Group {...props} />;
}

export function GFGImage(props) {
  return <Image {...props} />;
}
