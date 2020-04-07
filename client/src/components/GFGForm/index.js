import React from "react";
import { Input, Button, Label } from "semantic-ui-react";

export function GFGButton(props) {
  return <Button primary {...props}> {props.children}</Button>;
}

export function GFGInput(props) {
  return <Input {...props} focus />;
}

export function GFGLabel(props) {
  return <Label {...props} />;
}
