import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./style.css";


export function GFGCardHeader(props) {
  return <Card.Header className="maintainFonts" {...props}> {props.children}</Card.Header>;
}

export function GFGCardMeta(props) {
  return <Card.Meta className="maintainFonts" {...props} />;
}

export function GFGCardDes(props) {
  return <Card.Description className="maintainFonts" {...props} />;
}

export function GFGCardGroup(props) {
  return <Card.Group {...props} />;
}

export function GFGCardContent(props) {
  return <Card.Content className="maintainFonts" {...props} >{props.children} </Card.Content>;
}


export function GFGImage(props) {
  return <Image {...props} />;
}
