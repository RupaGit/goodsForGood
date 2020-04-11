import React from "react";
import { Input, Button, Label, TextArea, Dropdown } from "semantic-ui-react";

export function GFGButton(props) {
  return <Button color={props.color} {...props}> {props.children}</Button>;
}

export function GFGInput(props) {
  return <Input {...props} focus />;
}

export function GFGLabel(props) {
  return <Label {...props} />;
}

export function GFGDropdown(props) {
  return <Dropdown text={props.text} options={props.options} simple item />;
}


export function GFGTextArea(props) {
  return <TextArea {...props} focus />;
}
