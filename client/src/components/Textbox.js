import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react'

export default class Textbox extends Component {
    render() {
        return (
            <Form>
    <TextArea placeholder='working on the text' />
  </Form>
)
        }
    }