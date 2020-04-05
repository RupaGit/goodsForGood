import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./style.css";

export default function GFGContainer(props) {
  return (
    <Container className="gfgContainer" {...props}>
      {" "}
      {props.children}
    </Container>
  );
}
